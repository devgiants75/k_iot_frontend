import React, { useMemo, useState } from "react";

//! useMemo
// : 성능 최적화를 위한 React 함수형 컴포넌트 Hooks
// : 특정 연산의 결과를 메모리에 저장하여 동일한 값에 대해서는
//    , 해당 연산을 다시 수행하지 않고 기억된 값을 재사용

/*
? 기본 구조
  const memoizedValue = useMemo(() =. {
    @ 연산할 코드

    return 계산 결과;
  }, [의존성 배열, deps])
*/

function B_UseMemo() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  //? 복잡한 계산 함수 (시간이 오래 걸림)
  const expensiveCalc = (num: number) => {
    console.log("계산 시작");
    for (let i = 0; i < 999999999; i++) {}
    return num + 100;
  };

  const memoizedResult = useMemo(() => {
    const result = expensiveCalc(count);
    return result;
  }, [count]);

  return (
    <div>
      <h5>=== useMemo ===</h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      {/* 
      <p>Result(Count + 100): {expensiveCalc(count)}</p>
       */}
      <p>Result(Count + 100): {memoizedResult}</p>

      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default B_UseMemo;
