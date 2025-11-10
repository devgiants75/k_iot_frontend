import { useAuthStore } from "@/stores/auth.store";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const { login, isLoading, error, user } = useAuthStore();

  const [loginId, setLoginId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(loginId, password);

    // 로그인 성공 시 홈으로 이동
    if (useAuthStore.getState().user) {
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="text"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p>{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? '로그인 중' : '로그인'}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
