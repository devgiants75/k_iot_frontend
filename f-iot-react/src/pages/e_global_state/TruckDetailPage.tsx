import TruckReservationDetail from '@/components/TruckReservationDetail';
import TruckReservationList from '@/components/TruckReservationList';
import { useReservationStore } from '@/stores/reservation.store';
import React, { useEffect } from 'react'
import '@/pages/e_global_state/truck-pages.css'

//! 가게(트럭)에 대한 상세 페이지
// : 가게 상세 정보 페이지
// - store를 통해 트럭 선택 / 예약 목록 호출을 제어
//   > 좌측 사이드바에서 트럭 선택 (store.setSelectedTruckId + fetchReservations 호출)
//   > 중앙에서 예약 목록, 우측에 상세 컴포넌트 렌더링
function TruckDetailPage() {
  const {
    selectedTruckId,
    setSelectedTruckId,
    fetchReservations,
    clearSelection
  } = useReservationStore();

  // 예시 트럭 목록 - 실제 앱에선 API로 받아오기!
  const exampleTrucks = [
    { id: 1, name: "한강 푸드트럭", category: 'DESSERT', region: 'SEOUL', description: '디저트를 파는 한강의 푸드트럭' },
    { id: 2, name: "광안리 푸드트럭", category: 'FOODS', region: 'BUSAN', description: '음식을 파는 광안리의 푸드트럭' },
    { id: 3, name: "유성 푸드트럭", category: 'DRINKS', region: 'DAEJEON', description: '음료를 파는 유성의 푸드트럭' },
  ];

  // 최초 로딩 시 트럭 목록 가져오기
  // useEffect(() => {
  //   fetchTrucks();

      // +) 초기 트럭 자동 선택 로직 추가 
      //  > owner입장: 제일 최근의 가게 / consumer입장: 제일 인기 많은 가게
  // }, [fetchTrucks]);

  // 트럭 선택 핸들러
  const handleSelectTruck = async (truckId: number) => {
    if (selectedTruckId === truckId) {
      // 같은 트럭이면 선택 해제
      setSelectedTruckId(null);
      clearSelection();
      return;
    }

    // 선택 변경
    setSelectedTruckId(truckId);
    await fetchReservations(truckId);
  }

  return (
    <div className='truck-page-container'>
      <aside className="truck-sidebar">
        <h3 className="truck-sidebar-title">트럭 선택</h3>
        <ul className='truck-list' role='list'>
          {exampleTrucks.map(truck => (
            <li key={truck.id}>
              <button 
                type='button' 
                className={`truck-list-btn ${selectedTruckId === truck.id ? "active" : ""}`}
                onClick={() => handleSelectTruck(truck.id)}
              >
                {truck.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className='truck-main'>
        <div className="truck-main-header">
          <h1>푸드트럭 상세</h1>
          <div className='truck-current'>
            현재 선택된 트럭: {selectedTruckId ? `${selectedTruckId}` : "없음"}
          </div>
        </div>

        <div className='truck-container-grid'>
          {/* pane: 컴퓨터 화면의 창 (왼쪽 창) */}
          <section className='left-pane' aria-label='예약 목록'>
            <TruckReservationList />
          </section>
          <section className='right-pane' aria-label='예약 상세'>
            <TruckReservationDetail />
          </section>
        </div>
      </main>
    </div>
  )
}

export default TruckDetailPage