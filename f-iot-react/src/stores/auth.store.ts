// auth.store.ts

import { signIn } from "@/apis/authApi";
import { create } from "zustand";
import type { PersistOptions } from "zustand/middleware";
import { devtools, persist } from "zustand/middleware";

// 전역 상태 관리 될 사용자 데이터
interface User {
  id: number;
  loginId: string;
  // nickname: string;
}

interface AuthState {
  //@ 현재 로그인한 사용자 정보 (로그인 안 했을 경우: null)
  user: User | null; 
  //@ 토큰 상태
  accessToken: string | null;
  //@ 로딩 상태 (로그인/로그아웃 요청 중 true)
  isLoading: boolean;
  //@ 예외 상태
  error: string | null;

  //^ 액션(Actions)
  //@ 로그인 함수 (비동기, API 요청)
  login: (loginId: string, password: string) => Promise<void>;
  //@ 로그아웃 함수
  logout: () => void;
  //@ 사용자 설정 함수
  setUser: (u: User | null) => void;
  //@ 토큰 설정 함수
  setAccessToken: (token: string | null) => void;
  //@ 리프레시 토큰 설정 함수
  refreshToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(
  set => ({
    // 초기 상태
    user: null,
    accessToken: null,
    isLoading: false,
    error: null,

    // -- 액션 정의
    setUser: (u) => set({ user: u }),
    setAccessToken: (token) => set({ accessToken: token }),

    login: async (loginId, password) => {
      set({ isLoading: true, error: null });
      try {
        const data = await signIn({ loginId, password });
        set({
          user: { id: 1, loginId: data.username },
          accessToken: data.accessToken,
          isLoading: false
        });
      } catch (e) {
        set({
          isLoading: false,
          error: (e as Error).message ?? "로그인 실패",
        });
      }
    },
    logout: () => {
      set({
        user: null,
        accessToken: null
      });
    }, 
    refreshToken: async () => {
      try {
        const newToken = 'refreshed-token';
        set({ accessToken: newToken });
      } catch (e) {
        set({ error: (e as Error).message })
      }
    },
  })
);