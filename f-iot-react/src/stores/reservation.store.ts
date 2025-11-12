//! reservation.store.ts
// : 예약/주문 관련 상태 (도메인 상태)
// - 푸드트럭 예약/ 주문 같은 실제 "비즈니스 로직" 상태
// - 특정 가게(트럭)의 예약 내역을 불러오고, 선택한 가게(트럭)과 타임슬롯을 관리

import { getAllReservations } from "@/apis/reservationApi";
import { create } from "zustand";

//@ 원산지) types 폴더!
export interface Reservation {
  id: number;             // 예약 고유 PK 값
  trunckId: number;       // 가게(트럭) 고유 PK 값 (FK)
  userId: number;         // 사용자 고유 PK 값 (FK)
  date: string;           // "2025-11-12"
  timeSlot: string;       // "10:00-11:00"
  status: string;         // "CONFIRMED" | "CANCELLED"
}

// 스토어 내부의 객체 타입
interface ReservationState {
  selectedTrunckId: number | null;
  selectedTimeSlot: string | null;
  reservationList: Reservation[];

  fetchReservations: (trunkId: number) => Promise<void>;
  clearSelection: () => void;
}

// 스토어 생성
export const useReservationStore = create<ReservationState>((set) => ({
  selectedTrunckId: null,
  selectedTimeSlot: null,
  reservationList: [],

  fetchReservations: async (trunckId) => {
    // const reservations: ReservationsResponse = await getAllReservations(trunckId);
    const reservations = await getAllReservations(trunckId);
    set({ reservationList: reservations })
  },
  clearSelection: () => set({ selectedTrunckId: null, selectedTimeSlot: null }),
}));