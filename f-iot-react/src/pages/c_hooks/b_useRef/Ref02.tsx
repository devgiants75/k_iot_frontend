import React, { useRef, useState } from 'react'

//! useRef를 사용한 DOM 요소 참조
// : 컴포넌트가 재렌더링되어도 동일한 참조값을 유지
// - 특정 DOM 요소에 접근하고 조작

//? useRef의 특징
// : 단순히 "값 저장"만이 아니라
// - 1) 이전 상태 기억
// - 2) DOM 요소 직접 제어

function Ref02() {
  //^ === Hooks === //
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  //? DOM 요소 타입 - input(HTMLInputElement), div(HTMLDivElement) 등
  // >> DOM 요소는 기본요소타입과 null 타입을 유니언(OR)으로 가짐
  //    : 기본값 null 권장
  const inputRef = useRef<HTMLInputElement>(null);

  //^ === Event Handler === //
  const increment = () => {
    setCount(prevCount => {
      prevCountRef.current = prevCount; // 이전 값
      return prevCount + 1;             // 현재 값
    });
  }

  const handleButtonFocus = () => {
    // current 속성값에 요소의 참조값이 담겨져 있음
    if (inputRef.current) { // useRef와 연결된 DOM 요소가 있다면
      inputRef.current.focus();
    }
  }

  return (
    <div>
      {/* //@ 이전 상태 기억 */}
      <p>현재 카운트: {count}</p>
      <p>이전 카운트: {prevCountRef.current}</p>
      <button onClick={increment}>증가</button>

      <br />
      {/* //@ DOM 요소 참조 - 직접 조작: ref 속성에 요소의 참조값을 등록 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonFocus}>input에 포커스</button>
    </div>
  )
}

export default Ref02