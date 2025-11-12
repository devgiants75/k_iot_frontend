import { useReservationStore } from '@/stores/reservation.store'
import React, { useEffect } from 'react'
import '@/pages/e_global_state/truck-pages.css'

//! 가게(트럭)의 전체 예약 정보 - 리스트 목록
// 예약에서 항목 클릭시 setSelcetedTimeSlot 호출 -> 상세 컴포넌트와 공유
function TruckReservationList() {
  const {
    selectedTruckId,
    reservationList,
    selectedTimeSlot,
    fetchReservations,
    setSelectedTimeSlot,
    clearSelection
  } = useReservationStore();

  // selectedTruckId 변경 시 예약 목록 새로 불러오기
  useEffect(() => {
    if (!selectedTruckId) {
      // 선택 해제 상태라면 리스트 비우기
      clearSelection();
      return;
    }

    void fetchReservations(selectedTruckId);
  }, [selectedTruckId]);

  if (!selectedTruckId) {
    return (
      <div className="panel">
        <h2 className='panel-title'>예약 목록</h2>
        <p className="muted">좌측에서 트럭을 선택해주세요.</p>
      </div>
    );
  }

  return (
    <div className='panel'>
      <h2 className="panel-title">트럭 {selectedTruckId} - 예약 목록</h2>

      {reservationList.length === 0 ? (
        // 예약 목록이 없음
        <p className='muted'>예약 내역이 없습니다.</p>
      ) : (
        // 예약 목록이 있음
        <ul className="reservation-list" role='list'>
          {reservationList.map(reservation => (
            <li
              key={reservation.id}
              className={`reservation-item ${selectedTimeSlot === reservation.timeSlot ? "selected" : ""}`}
              onClick={() => setSelectedTimeSlot(reservation.timeSlot)}
              role='button'
              // 키보드 포커스가 가능하도록 설정: 0이면 문서 탭 순서에 따라 포커싱
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedTimeSlot(reservation.timeSlot)
                }
              }}
            >
              <div className='reservation-row'>
                <div className="reservation-timeslot">{reservation.timeSlot}</div>
                <div className="reservation-status">{reservation.status}</div>
              </div>
              <div className="reservation-user">예약자: {reservation.userId}</div>
              <div className="reservation-date muted" style={{ marginTop: 6 }}>예약자: {reservation.date}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TruckReservationList