import React, { useState } from 'react'

// cf) 리액트 코드 스니펫(자동 완성 기능) 확장 플러그인
// : React Snipptes 설치
// - 리액트에서 사용할 다양한 코드 집합 제공

// 1) imr: import React from 'react'
//    > 리액트 가져오기
// import React from 'react'

// 2) nfn: const functionName = (params) => {}
//    > 명명된 함수 생성
// const 이름 = (파리미터) => { 코드작성 }

//! rfce: 함수형 컴포넌트 구조 생성
function B_React_Counter() {

  //! 리액트 VS TS 차이
  // 1) UI 컴포넌트가 클래스 또는 '함수' 형태로 작성
  //    : 함수형 컴포넌트 사용 권장
  // 2) 컴포넌트 기반으로 UI와 상태 관리를 구현

  //? 함수형 컴포넌트를 사용하는 리액트 기능: hook(훅)
  const [count, setCount] = useState<number>(0);

  const increment = () => { 
    setCount(count + 1);  
  }

  const decrement = () => { 
    setCount(count - 1);  
  }

  return (
    <div>
      <p>VS 타입스크립트(카운터 예제)</p>
      <p>Count: {count}</p>
      {/* 
        ? JSX(TSX)에서는 속성 지정 시 lowerCamelCase 사용
        - js(ts): onclick 속성
        - jsx(tsx): onClick 속성
      */}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
}

// 기본 내보내기: 해당 모듈 사용 시 import에서 이름 변경 가능
export default B_React_Counter