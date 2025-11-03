import React, { useState } from 'react'

//! Hooks
// : 리액트 '함수형 컴포넌트'에서 사용할 수 있는 기능
// : use- 키워드로 시작
//   > '여기서 해당 기능을 사용한다'라는 의미

// EX) useState : 상태(state) 기능을 여기서 사용한다.
// EX) useEffect: 부수효과(effect) 기능을 여기서 사용한다.

//! === useState === //
// : React의 함수형 컴포넌트 내부에서 state(상태)를 관리할 수 있도록 제공하는 (대표적인) 기능

//? 특징
//@ - '컴포넌트 단위'에서의 상태 관리
//@ - '상태값(state)'과 '해당 상태를 업데이트하는 함수(setState)'를 한 쌍으로 반환
//   >> 상태값변수명(user), set상태값변수명(setUser)
// - 상태 변경 시 컴포넌트는 자동으로 재랜더링
// - 상태 업데이트는 비동기적으로 처리
//@ - 배열 구조 분해 할당으로 사용: [state, setState] = useState(initialValue);
//   >> useState() 호출 시 인자로 전달되는 값은 state에 처음 할당될 기본값
//@ - 제네릭<type>으로 타입 명시 가능
//   >> useState<User>({ name: '이승아', age: 29 });

// const [state, setState] = useState(); - 사용 X



function State01() {
  //? 기본 구조와 명명 규칙
  // const [state, setState] = useState<type>(initialValue);

  //@ state         : 현재 상태값 (변수)
  //@ setState      : 상태를 업데이트하는 함수
  //@ initialValue  : 초기값, 초기 상태를 설정 (생략 가능 - undefined 값)
  // 명명 규칙 : set + 상태명 (name -> setName, count -> setCount, post -> setPost)

  //? useState 호출 규칙
  // - 반드시 컴포넌트의 최상단에서 호출! 
  //   : 조건문, 반복문, 내부 함수에서 호출 불가!

  return (
    <div>State01</div>
  )
}

export default State01