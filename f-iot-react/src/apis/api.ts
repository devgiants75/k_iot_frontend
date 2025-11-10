// api.ts
// : 서버와 통신하는 API 호출 관련 로직 정의 (코드 재사용 및 모듈화)

import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api/v1';

//? cf) process.env.REACT_APP_API_BASE
// : 환경 변수
// - REACT 앱에서 API 서버의 기본 URL 같은 설정값을 외부에서 주입받을 때 사용

export const api: AxiosInstance = axios.create({
  baseURL: API_BASE,
  timeout: 10000,     
  // 10초 타임아웃 - 요청이 10초 이상 걸릴 경우 자동으로 요청 취소 + 타임아웃 에러 발생
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
});

//? Axios 특징
// 1) Promise 기반: .then() / await 사용 가능
// 2) 자동 JSON 처리: 객체를 JSON으로 변환하거나 파싱 자동
// 3) 응답 객체 구조화: response.data만 확인!
// 4) 인터셉터 지원: 요청/응답 가로채기 가능 (토큰/에러 처리 등)
// 5) Axios 인스턴스: 공통 설정을 모아 재사용 가능

//? Axios 응답 구조(response)
// EX) const response = await axios.get("URL 경로");
/*
  @ response: 객체 구조
  {
    data: { ... },      : 실제 데이터
    status: 200,        : HTTP 상태 코드
    statusText: OK,     : 상태 메시지
    headers: { ... },   : 응답 헤더
    config: { ... },    : 요청 설정
    request: { ... }    : 요청 객체
  }

  const data = response.data;
*/

//! 요청 인터셉터: 토큰 자동 삽입
// api.interceptors.request.use(요청설정이행, 요청설정에러);
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}, (e) => Promise.reject(e));

//! 응답 인터셉터: 401 처리(Unauthorized: 자격 증명 부족), 에러 포맷 통일
// api.interceptors.response.use(응답설정이행, 응답설정에러);
api.interceptors.response.use(response => response, async (e) => {
  const status = e?.response?.status;
  if (status === 401) {
    // 예: 토큰 만료 -> 리프레시 시도 또는 로그아웃
    localStorage.removeItem('accessToken');
    // 필요 시 로그인 페이지로 이동
    // window.location.href = '/login';

    // 에러 객체 구조 통일
    return Promise.reject(e);
  }
});