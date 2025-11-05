import { useInputs } from "@/hooks/useInputs";
import React from "react";

interface MemberInfo {
  name: string;
  email: string;
  phone: string;
}

function Custom03() {
  const { values, handleReset, bind } = useInputs<MemberInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = values;

  return (
    <div>
      <h5>회원 정보 입력</h5>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={bind.onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={bind.onChange}
          placeholder="이메일"
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={bind.onChange}
          placeholder="핸드폰번호"
        />
      </div>
      <p>이름: {name}, 이메일: {email}, 핸드폰번호: {phone}</p>
      <button onClick={handleReset}>전체 초기화</button>
    </div>
  );
}

export default Custom03;
