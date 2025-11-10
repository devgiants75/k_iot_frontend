// authApi.ts

import { publicApi } from "./axiosInstance";

interface SignInRequest {
  loginId: string;
  password: string;
}

interface SignInResponse {
  username: string;
  accessToken: string;
}

export const signIn = async (data: SignInRequest): Promise<SignInResponse> => {
  const res = await publicApi.post('/auth/sign-in', data);

  if (!res.data.success) throw new Error('Login failed');
  return res.data.data;
}