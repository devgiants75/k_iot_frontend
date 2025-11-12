//! reservation.store.ts
// : 예약/주문 관련 상태 (도메인 상태)
// - 푸드트럭 예약/ 주문 같은 실제 "비즈니스 로직" 상태
// - 특정 가게(트럭)의 예약 내역을 불러오고, 선택한 가게(트럭)과 타임슬롯을 관리

import { getAllReservations, getReservation } from "@/apis/reservationApi";
import { create } from "zustand";

//@ 원산지) types 폴더!
export interface Reservation {
  id: number;             // 예약 고유 PK 값
  truckId: number;       // 가게(트럭) 고유 PK 값 (FK)
  userId: number;         // 사용자 고유 PK 값 (FK)
  date: string;           // "2025-11-12"
  timeSlot: string;       // "10:00-11:00"
  status: string;         // "CONFIRMED" | "CANCELLED"
}

// 스토어 내부의 객체 타입
interface ReservationState {
  selectedTruckId: number | null;
  selectedTimeSlot: string | null;
  reservationList: Reservation[];

  fetchReservations: (truckId: number) => Promise<void>;
  fetchReservationById: (truckId: number, reservationId: number) => Promise<Reservation | null>;
  setSelectedTruckId: (truckId: number | null) => void;
  setSelectedTimeSlot: (timeSlot: string | null) => void;
  clearSelection: () => void;
}

// 스토어 생성
export const useReservationStore = create<ReservationState>((set) => ({
  selectedTruckId: null,
  selectedTimeSlot: null,
  reservationList: [],

  fetchReservations: async (truckId) => {
    // const reservations: ReservationsResponse = await getAllReservations(trunckId);
    const reservations: Reservation[] = await getAllReservations(truckId);
    set({ reservationList: reservations, selectedTruckId: truckId })
  },
  fetchReservationById: async (truckId, reservationId) => {
    try {
      const dto = await getReservation(truckId, reservationId);
      if (!dto) return null;

      // 추가 또는 덮어쓸 객체
      const mapped = {
        id: dto.id,
        truckId: dto.truckId,
        userId: dto.userId,
        date: dto.date,
        timeSlot: dto.timeSlot,
        status: dto.status
      } as Reservation;
  
      // store에 단건을 리스트에 반영하거나 반환만 가능
      // : 리스트에 해당 항목이 있으면 덮어쓰고, 없으면 앞에 추가
      // > set 설정 함수는 내부에 콜백함수를 가짐 (해당 콜백함수의 매개변수는 상태의 최신값)
      set((state) => {
        // some()메서드
        // : 배열의 요소 중 조건을 만족하는 요소가 하나 이상인 경우 true
        // every()메서드
        // : 배열의 요소가 모두 해당 조건을 만족할 경우 true
        const exists = state.reservationList.some(reservation => reservation.id === dto.id);
        return {
          reservationList: exists
            ? state.reservationList.map(reservation => (reservation.id === dto.id ? mapped : reservation ))
            : [ mapped, ...state.reservationList ],
        }
      });

      return mapped; // undefined를 방지하는 반환 - 해당 메서드의 반환 타입이 //@ Promise<Reservation | null>;
    } catch (e) {
      return null;
    }
  },
  setSelectedTruckId: (truckId) => set({ selectedTruckId: truckId }),
  setSelectedTimeSlot: (timeSlot) => set({ selectedTimeSlot: timeSlot }),
  clearSelection: () => set({ selectedTruckId: null, selectedTimeSlot: null }),
}));