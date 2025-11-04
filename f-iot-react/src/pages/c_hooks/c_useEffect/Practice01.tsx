import React, { useEffect, useState } from 'react'

/*
  ! useEffect 주의사항
  1) 의존성 배열 누락
    : useEffect 내부에서 사용하는 상태나 props는 반드시 deps에 포함
  2) 무한 렌더링 루프
    : useEffect 안에서 state를 잘못 업데이트하면 무한 렌더링 발생
  3) 비동기 함수 직접 전달 금지
    : useEffect(async() => {...}) - X
    > 대신 내부에서 async 함수 정의 후 호출
  
  ? deps (dependencies, 의존성 배열)
*/

//! === 푸드트럭 예약 시스템 === //
// : 푸드트럭 예약 관리 화면에서, 관리자가 고객의 예약 상태를 실시간으로 모니터링하고 승인
/*
  @ 1) 트럭 예약 데이터 불러오기 
    - API 호출
    - 마운트 시 실행

  @ 2) 일정 주기 자동 새로고침
    - useEffect + setInterval 로 폴링 구현
    ? 폴링(Polling)
      : 클라이언트가 서버에게 주기적으로 요청을 보내 새로운 데이터나 상태 변화를 확인하는 방식

  @ 3) 예약 상태 변경
    - 버튼 클릭 시 수정 요청 후 UI 갱신

  @ 4) 로딩 / 에러 / 성공 상태 구분

  @ 5) 의존성 배열 & clean-up(정리 함수)
    - 메모리 누수 방지 및 성능 최적화
*/

//! 1. 예약 데이터 타입 정의
type ReservationStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

type Reservation = {
  id: number;                   // 예약 고유 ID
  customer_name: string;        // 고객 이름
  truck_name: string;           // 예약한 푸드트럭 이름
  time_slot: string;            // 예약 시간대 (EX: 12:30 PM)
  status: ReservationStatus;    // 예약 상태 (대기 / 승인 / 취소)
}

//! 2. API 엔드포인트 (현재는 mock 데이터)
// : 실제 서비스에서는 "~/api/v1/reservations" REST API 사용
const API_URL = "https://jsonplaceholder.typicode.com/users";

//! 3. 메인 컴포넌트
function Practice01() {
  //^ === Hooks === //
  // 1) 예약 목록 상태
  const [reservations, setReservations] = useState<Reservation[]>([]); 
  // 2) 로딩 상태 - boolean
  const [loading, setLoading] = useState<boolean>(false);
  // 3) 에러 상태 - string (요청 실패 시 저장)
  const [error, setError] = useState<string | null>(null);

  //^ === Function === //
  // 예약 데이터 가져오기 함수 정의 (비동기)
  const fetchReservations = async () => {
    setLoading(true);   // 로딩 시작
    setError(null);     // 에러 초기화

    try {
      const response = await fetch(API_URL); // API 호출

      if (!response.ok) {
        // HTTP 응답이 200 ~ 299가 아닐 경우 에러 발생
        throw new Error(`HTTP 에러! 상태코드: ${response.status}`);
      }

      const data = await response.json(); // JSON 파싱

      // 실제 예약 데이터 구조로 변환 (임시 매핑)
      // > slice(시작 인덱스, 끝 인덱스)까지의 얕은 복사본을 새로운 배열로 반환
      const mappedData: Reservation[] = data.slice(0, 5).map((item: any, idx: number) => ({
        id: item.id,                                    // mock id
        customer_name: item.name,                       // mock 사용자 이름
        truck_name: `Truck-${idx + 1}`,                 // 트럭 이름 예시
        time_slot: `12:${idx}0 PM`,                     // 시간대 예시 (12시부터 10분씩 차이)
        status: idx % 2 === 0 ? "PENDING" : "CONFIRMED" // 홀짝에 따라 상태 다르게
      }));

      setReservations(mappedData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError((e as Error).message);
    }
  }

  //@ 컴포넌트 마운트 시 예약 데이터 1회 로딩
  useEffect(() => {
    fetchReservations(); 
  }, []); // 의존성 배열 빈 배열

  //@ 30초 마다 자동 새로고침 (폴링)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('예약 데이터 자동 새로고침');
      fetchReservations();
    }, 30000); // 30초

    // 언마운트 시 타이머 정리 (메모리 누수 방지)
    return () => {
      clearInterval(interval);
      console.log('폴링 중단 (컴포넌트 언마운트)');
    }
  }, []);

  //@ 예약 상태 변경 핸들러
  const updateReservationStatus = async (id: number, newStatus: ReservationStatus) => {
    try {
      // 실제 API 환경에서는 HTTP PUT 요청 전송
      console.log(`PUT /api/v1/reservations/${id} -> ${newStatus}`);

      // UI 즉시 반영
      setReservations(prev => prev.map(reservation => 
        reservation.id === id ? { ...reservation, status: newStatus } : reservation
      ));
    } catch (e) {
      console.error("예약 상태 변경 실패", e);
    }
  }

  //! 4. 로딩 / 에러 / 성공 분기 렌더링
  if (loading) return <p>🔃 예약 정보를 불러오는 중입니다...</p>
  if (error) return <p>⛔ 오류 발생: {error}</p>

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
      <h2>🚚 푸드트럭 예약 대시보드</h2>

      {/* 예약 데이터가 없을 때 */}
      {reservations.length === 0 && <p>현재 예약이 없습니다.</p>}

      <ul>
        {reservations.map(reservation => (
          <li key={reservation.id} style={{
            background: 'white',
            margin: '10px 0',
            padding: '10px',
            borderRadius: '8px'
          }}>
            <h4>{reservation.customer_name} ({reservation.truck_name})</h4>
            <p>시간대: {reservation.time_slot}</p>
            <p>상태: {" "} <b style={{
              color: reservation.status === 'CONFIRMED' ? 'green' : 
                      reservation.status === 'PENDING' ? "orange" : 'red'
            }}>{reservation.status}</b></p>

            {/* 상태 변경 버튼 영역 */}
            <div style={{ marginTop: '8px' }}>
              {/* CONFIRMED가 아닐 때만 승인 버튼 */}
              {reservation.status !== 'CONFIRMED' && (
                <button onClick={() => updateReservationStatus(reservation.id, "CONFIRMED")}>
                  승인
                </button>
              )}

              {/* CANCELLED가 아닐 때만 취소 버튼 */}
              {reservation.status !== 'CANCELLED' && (
                <button onClick={() => updateReservationStatus(reservation.id, "CANCELLED")}>
                  취소
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Practice01