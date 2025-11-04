import React, { useEffect, useState } from 'react'

//! === useEffect (부수 효과, Side Effect) === //
// : React 함수형 컴포넌트에서 부수 효과를 수행하기 위한 Hook(기능)
// - 데이터 가져오기, 컴포넌트 렌더링 시 특정 작업 수행 등

//? 부수 효과
// : 컴포넌트의 "주요 기능(UI 렌더링, 상태 관리)" 외에 발생하는 작업
// EX) API 호출, 이벤트 리스너 등록, 수동 DOM 조작

//? React 컴포넌트의 생명 주기(Lifecycle)
// 1) 마운팅(Mounting)
//    : 컴포넌트가 DOM에 처음 삽입될 때
//    @ 초기 데이터 불러오기

// 2) 업데이트(updating)
//    : state 또는 props가 변경될 때 (재랜더링)
//    @ 특정 값 변화 감지 및 후속 작업

// 3) 언마운팅(Unmounting)
//    : 컴포넌트가 DOM에서 제거될 때
//    @ 리소스 해제, 타이머 정리 등

//? useEffect 기본 구조
// : 1 ~ 2개의 인자가 필요

// @ 1) 첫 번째 인자
// : 콜백함수 (화살표 함수)
// : 부수 효과를 수행하는 함수

// @ 2) 두 번째 인자
// : 의존성 배열
// - 해당 배열 값의 요소가 변경될 때마다 부수 효과가 다시 실행
//   ^ 의존성 배열 생략: 모든 렌더링마다 실행 (거의 사용하지 않음)
//   ^            [] : 빈 배열, 마운트 시 한 번만 실행 (컴포넌트 초기화용)
//   ^      [변수1, 변수2 ...]: 해당 변수의 값이 바뀔 때 실행 (특정 상태 변화 감지)

/*
? useEffect는 반환값 없이 사용
useEffect(() => {
  == 부수 효과 ==

  ? useEffect의 정리 함수
    >> useEffect에서 함수를 return하면 
      해당 함수는 컴포넌트 화면에서 사라질 때 (언마운트) 실행
  return () => {
    == 언마운트 시 실행 ==
    : 타이머, 인터벌 해제(clearInterval)
    : 이벤트 리스너 제거(removeEventListener)
  }
}, [의존성배열1, 2, 3, 4 ...]);

*/
function Effect01() {
  //^ === Hooks ===
  const [count, setCount] = useState<number>(0); // 상태 변경
  const [name, setName] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  //@ 의존성 배열이 없는 useEffect: 모든 렌더링 시에 동작
  useEffect(() => {
    console.log('의존성 배열이 없는 useEffect');
  });

  //@ count값을 의존성 배열로 가지는 useEffect
  // : 마운트 시 + count값 상태 변경
  useEffect(() => {
    console.log('count값을 의존성 배열로 가지는 useEffect');
  }, [count]);

  //@ name값을 의존성 배열로 가지는 useEffect
  // : 마운트 시 + name값 상태 변경
  useEffect(() => {
    console.log('name값을 의존성 배열로 가지는 useEffect');
  }, [name]);

  //@ 빈 배열을 의존성 배열로 가지는 useEffect
  // : 마운트 시에만 실행
  useEffect(() => {
    console.log('빈 배열을 의존성 배열로 가지는 useEffect');
  }, []);

  //@ count, name 값을 의존성 배열로 가지는 useEffect
  useEffect(() => {
    console.log('count, name 값을 의존성 배열로 가지는 useEffect');
  }, [count, name]);

  //@ 정리 함수 
  useEffect(() => {
    console.log('=== 타이머 시작 ===');

    // React Strict Mode는 컴포넌트를 의도적으로 2번 실행
    // const timer = setInterval(() => {
    //   setTime(prev => prev + 1);
    // }, 1000);

    // 정리 함수가 필수
    // return () => {
    //   clearInterval(timer);
    //   console.log('타이머가 정리됨 (컴포넌트가 사라짐)');
    // }
  }, []);

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        증가
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        감소
      </button>

      <br />
      <span>{name}</span>
      <button onClick={() => setName(name === '이승아' ? '이도경' : '이승아')}>
        이름 변경
      </button>

      <br />
      <p>시간: {time}초</p>
    </div>
  )
}

export default Effect01