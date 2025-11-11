//! axiosInstance.ts
// : axios.create() 설정 파일
// - 반복되는 요청 설정(URL, header 등)을 한 번에 정의하기 위해 axios 인스턴스 생성

import { useAuthStore } from "@/stores/auth.store";
import axios, { type InternalAxiosRequestConfig } from "axios";
import { refreshAccessToken } from "./authApi";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api/v1';

//? 1. 기본 인스턴스 (토큰 필요 없는 공개 API)
export const publicApi = axios.create({
  // config 설정 객체
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
});

//? 2. 인증 인스턴스 (토큰이 필요한 API)
export const privateApi = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  // 세션이나 쿠키 인증용: 쿠키나 인증 헤더 정보를 포함시켜서 요청을 보냄
  withCredentials: true,
});

//@ 요청 인터셉터 설정 (privateApi 만)
privateApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // AccessToken 저장 위치: zustand store
  const token = useAuthStore.getState().accessToken;

  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}, (e) => Promise.reject(e));

//@ 응답 인터셉터 설정 
privateApi.interceptors.response.use(
  // 정상 응답일 경우 그대로 반환
  response => response, 
  // 에러 발생 시
  async (e) => {
    // e.config
    // : Axios는 각 요청의 설정값(config)을 객체로 보관
    // - 실패한 요청의 원본 설정
    const originalRequest = e.config;

    // 401 Unauthorized 발생 + 아직 재시도(_retry) 안 했을 경우
    if (e.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 재시도된 요청인지 판별
      try {
        const newToken = await refreshAccessToken();
        const { setAccessToken } = useAuthStore.getState();
        setAccessToken(newToken);

        // 실패했던 요청의 Authorization 헤더를 새 토큰으로 교체
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        // 같은 요청을 다시 시도 (토큰 갱신 후 재전송)
        return privateApi(originalRequest);

      } catch (e) {
        // 토큰 재발급 실패 시 -> 강제 로그아웃 처리
        useAuthStore.getState().logout();
      }
    }
    return Promise.reject(e);
  }
);