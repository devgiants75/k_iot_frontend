// useInputs.ts

import { useState } from "react";

//! 관리할 input이 여러 개인 경우
// : 각각의 useInput을 호출하는 대신 객체 단위로 관리 가능

/*
  id: string;
  password: string;
  name: string;
  age: number;
*/

export function useInputs<T extends object>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  //@ T 객체의 key 속성값들만 모아 유니언 타입으로 생성 ('id' | 'password' | ...)
  const handleChange = <K extends keyof T>(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    //@ name이 T의 키들 중 하나일 때만 동작하도록 타입 제한
    if (name in values) {
      setValues(prev => ({
        ...prev,
        [name]: value as T[K]
      }));
    }
  }

  const handleReset = () => setValues(initialValues);

  return {
    values,
    handleReset,
    bind: {
      onChange: handleChange
    }
  }
}