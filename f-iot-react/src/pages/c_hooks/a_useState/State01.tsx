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
  //@ - 반드시 컴포넌트의 최상단에서 호출! 
  //   : 조건문, 반복문, 내부 함수에서 호출 불가!
  //@ - hooks는 React 내부의 함수 - import 해서 사용!
  // - 여러 개의 상태 사용 시, 관련 있는 훅끼리 묶어서 컴포넌트 상단에 배치 -> 가독성 향상

  // if (true) {
  //   const [state, setState] = useState();
  // }

  //^ === HOOKS (useState) === //
  //? useState 실습 예제 - 카운터 컴포넌트
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('안녕하세요');
  // if (true) {
    const [msg, setMsg] = useState<string>('반갑습니다');
  // }

  //^ 이벤트 핸들러 정의
  //? 이벤트 핸들러 내에서 count값 변경: 상태 설정 함수 사용
  //@ 1) 상태 설정 함수를 그대로 사용
  //    : 이전의 상태를 직접 참조
  //    > 주로 현재(이전, 최신)의 값과 관련이 없는 변화가 이루어질 경우 사용
  const handleUpClick = () => {
    // setCount(5); // 상태 설정 함수의 인자값이 상태 변수로 전달!
    // setCount(count + 1); // 0 + 1 === 1
    // setCount(count + 1); // 0 + 1 === 1 

    //@ 2) 함수형 컴포넌트 사용
    //    : 현재(이전, 최신)의 상태값을 기반으로 상태를 업데이트 하는 경우 사용
    // cf) set- 상태 변경 함수 내에서 콜백 함수
    //     setCount(() => {})
    //     >> 해당 콜백 함수의 인자는 '상태의 최신값!' 
    //     >> prev-상태명 (prevName, prevCount, prevUser / previous 이전의)
    setCount(prevCount => prevCount + 1); // 0 + 1 === 1
    setCount(prevCount => prevCount + 1); // 1 + 1 === 2
  }

  const handleDownClick = () => {
    // setCount(count - 1);
    // setCount(count - 1);

    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <p>카운트 클릭 횟수: {count}</p>
      <button onClick={handleUpClick}>카운트 +2 증가</button>
      <button onClick={handleDownClick}>카운트 -2 감소</button>

      <p>{message}</p>
      <p>{msg}</p>
    </div>
  )
}

export default State01