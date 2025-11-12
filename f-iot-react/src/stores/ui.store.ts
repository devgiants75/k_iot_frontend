//! ui.store.ts
// : UI/전역 인터랙션 상태
// - 컴포넌트 간에 UI 제어 상태를 공유해야 할 때 사용
// +) 브라우저 세션과 무관하게 상태값 지속할 경우 zustand + localStorage 저장 필수

import { create } from "zustand";

//? 전역 상태 관리할 데이터 + 함수
interface UIState {
  isSidebarOpen: boolean;   // 사이드바 열림/닫힘 여부
  isModalOpen: boolean;     // 모달 표시 여부
  darkMode: boolean;        // 다크모드 활성화 여부
  toastMessage: string | null; // 토스트 메시지 (없을 때는 null)

  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  showToast: (msg: string) => void;   // 매개변수 값을 toastMessage에 할당
  hideToast: () => void;              // toastMessage를 null로 할당
}

//? 스토어 생성
// create(): 스토어 생성
// create() 내부의 콜백함수
// > 매개변수) set 설정 함수 - UIState 내부의 속성 업데이트 함수
// > 반환값) UIState 타입의 객체
export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  isModalOpen: false,
  darkMode: false,
  toastMessage: null,

  // 함수 정의
  // > set 설정 함수의 콜백함수: 현재 최신의 state를 매개변수로 반환
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  showToast: (msg) => set({ toastMessage: msg }),
  hideToast: () => set({ toastMessage: null })
}));