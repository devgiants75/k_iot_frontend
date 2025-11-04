import React, { useRef, useState } from 'react'

//! === useRef ===
// use + References(참조)
// : 변경 가능한 참조 객체를 생성할 수 있는 기능(훅)
// : React에서 값을 기억하거나 DOM 요소를 직접 조작할 때 사용하는 특별한 변수

//? 사용 목적
// - DOM 요소에 직접적으로 접근하고 조작
// - 컴포넌트가 재렌더링될 때도 값이 유지되는 변수 관리
// - 이전 상태를 기억 (렌더링 사이에도 지속되는 값 유지)

//? 기본 구조
// const refContainer = useRef<valueType>(initialValue);

//@ refContainer
// : useRef는 객체를 반환 //^ useState는 배열 반환
//   - 해당 객체는 current 속성을 포함
//   - 컴포넌트 재렌더링과 무관하게 값이 유지

//@ refContainer.currnet
// : 저장된 현재 값에 접근

//# 1) 컴포넌트 실행 - 렌더링 함수
function Ref01() {
  //^ === Hooks ===
  //% 12) 예약된 데이터를 text값에 반영 - 'a'
  const [text, setText] = useState<string>('');

  //? useRef VS 일반 변수 let
  // 1) useRef: 재렌더링 사이에도 값이 유지
  //    - 값을 바꿔도 컴포넌트를 재렌더링하지 않음
  //    - 값은 항상 최신값으로 유지 (.currnet 값을 계속 업데이트)
  //% 13) 'a'의 길이값 1 유지
  const lengthRef = useRef<number>(0); //# 2) useRef 호출 시 { current: 0 } 객체 생성 & 저장

  // 2) 일반 변수
  //    - 함수형 컴포넌트는 변화를 감지하면 재렌더링 될 때마다 함수 전체가 다시 실행!
  //    - 아래의 number 변수에 매번 새로 초기화가 진행
  //% 14) 컴포넌트의 재실행으로 변수 새롭게 선언되고 다시 0으로 초기화
  let lengthVar = 0; //# 3) 지역변수 - 컴포넌트가 실행될 때마다 매번 새롭게 만들어짐

  //^ === Event Handler ===
  //# 6) 사용자의 입력에 반응하여 handleInputChange 이벤트 핸들러 실행
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //# 7) 리액트의 상태 변경 요청 
    // : 실시간 변경 반영 X
    // - 이벤트가 다 끝나면, 리렌더링 진행 (+ 변경값은 "예약')
    setText(e.target.value); 

    //# 8) useRef로 만든 참조 객체의 .current값 수정
    // : 일반 JS 객체 속성 변경과 동일
    // - 렌더링 필요없는 대상 (상태 관리와 무관, ref는 화면 갱신 대상 X)
    lengthRef.current = e.target.value.length;

    //# 9) 일반 변수에 데이터 수정
    // : 함수 안의 지역 변수 변경 (렌더링 함수 내부에만 존재, 화면과 연결 X)
    lengthVar = e.target.value.length;

    //# 10) ref 참조의 현재값(수정된 값)으로 출력
    console.log(lengthRef.current);
    //# 11) 화면이 아니라 '개발자 도구 콘솔창'에 출력 
    // : React가 렌더링하기 전에 JS코드가 실행
    console.log(lengthVar);
  }

  return (
    <div>
      {/* 4) 현재의 초기화 값으로 2개의 p태그 모두 0의 값을 가짐 */}
      <h4>현재 텍스트 길이 측정 예제</h4>
      {/* 5) 사용자의 입력 */}
      <input type="text" value={text} onChange={handleInputChange} /> 
      {/* 15) 이전의 값 유지: 1 출력 */}
      <p>재렌더링 시에도 값이 유지되는 Ref 값: {lengthRef.current}</p>
      {/* 
        ※ 콘솔에는 lengthVar가 계속 찍히지만, 화면에는 반영되지 않음! ※
        >> 실제로 화면이 렌더링될 때는 이미 새로운 값(0)으로 다시 초기화 된 상태
      */}
      {/* 16) 값의 유지 X: 0 출력 */}
      <p>컴포넌트가 렌더링 될 때마다 초기화되는 값: {lengthVar}</p>
    </div>
  )
}

export default Ref01