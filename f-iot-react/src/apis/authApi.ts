// authApi.ts

import { privateApi, publicApi } from "./axiosInstance";

export interface SignInRequest {
  loginId: string;
  password: string;
}

export interface SignInResponse {
  username: string;
  accessToken: string;
}


//! 로그인
export const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  const res = await publicApi.post('/auth/sign-in', data);
  if (!res.data.success) throw new Error('Login failed');
  return res.data.data;
}

//! 로그아웃
export const signOut = async (): Promise<void> => {
  await privateApi.post("/auth/sign-out");
}

//! Access 토큰 리프레스
export const refreshAccessToken = async (): Promise<string> => {
  const res = await publicApi.post("/auth/refresh-token", {}, { withCredentials: true });
  if (!res.data.success) throw new Error('Refresh failed');
  return res.data.data.accessToken;
}