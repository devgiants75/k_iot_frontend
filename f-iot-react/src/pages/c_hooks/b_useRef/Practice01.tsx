import React, { useEffect, useRef } from "react";

//! 예제1) 포커스 제어 (input 자동 포커스)
// : 회원가입, 로그인, 검색창에서 "렌더링 후' 포커스 주기

function Practice01() {
  //^ === Hooks === //
  const inputRef = useRef<HTMLInputElement>(null);

  //? 처음 렌더링 될 때 콜백함수의 기능을 딱 한 번만 실행
  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, []);

  //^ === Event Handler === //
  const handleLogin = () => {
    alert(`입력한 이메일: ${inputRef.current?.value}`);
  }

  return (
    <div style={{ backgroundColor: "#f0f8ff", padding: "10px" }}>
      <h2>로그인</h2>
      <input
        type="email"
        placeholder="이메일 입력"
        ref={inputRef}
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Practice01;
