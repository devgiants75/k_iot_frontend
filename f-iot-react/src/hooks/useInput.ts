// useInput.ts

import { useState } from "react";

type UseInputReturn = {
  //@ 입력 필드의 현재 값
  value: string;
  //@ 초기값으로 되돌리는 이벤트 핸들러
  handleReset: () => void;
  //@ bind(묶다) - input 속성에 바로 연결 가능한 객체 { value, onChange }
  bind: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

export function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
  }

  const handleReset = () => {
    setValue(initialValue);
  }

  const bind = {
    value, 
    onChange: handleInputChange
  }

  return { value, handleReset, bind };
}