import React, { useState } from "react";
import State06_Child from "./State06_Child";

//! === 컴포넌트 트리 안에서의 상태 ===
// : 상태를 컴포넌트 트리 아래로 전달 (부모 >> 자식 컴포넌트)

//? 상태(state) VS 속성(props)
// 1) 상태
// : 컴포넌트 '내부'에서 관리되는 데이터
// - 상태가 변경되면 재렌더링을 유발 (업데이트)
// >>> 컴포넌트가 '자기 자신'의 상태 변경 가능

// 2) 속성
// : 부모 컴포넌트(외부)로부터 전달받은 데이터
// - 컴포넌트 간의 데이터 전달에 사용
// >>> 읽기 전용 데이터(readonly)로 전달 - 자식 컴포넌트에서 수정 X

// cf) 리액트에서 컴포넌트는 '상태'와 '속성'을 사용하여 데이터와 UI를 관리

export type User = {
  name: string;
  height: number;
};

const initialValue: User = {
  name: "이도경",
  height: 157,
};

function State06() {
  // const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);
  const [userInfo, setUserInfo] = useState<User>(initialValue);
  const [submittedData, setSubmittedData] = useState<User | undefined>();

  const { name, height } = userInfo;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleUserInfoSubmit = () => {
    // 자식 컴포넌트에 데이터 전달
    setSubmittedData(userInfo);
  }

  return (
    <div>
      {/* 
        전체 선택: ctrl + a 
        -> 
        코드 정렬: ctrl + k + f 
      */}
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="height"
        value={height}
        onChange={handleInputChange}
      />
      <button onClick={handleUserInfoSubmit}>전송</button>
      <State06_Child userData={submittedData} />
    </div>
  );
}

export default State06;
