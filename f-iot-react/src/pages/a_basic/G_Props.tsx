import React from 'react'
import { Wrapper } from './H_Props';

/*
  cf) 컴포넌트(Component): 리액트의 구성 요소(UI)

  ! Props(Properties): 컴포넌트의 속성
  : Props로 데이터 전달
    <ChildComponent name="이승아" />
    - 함수형 컴포넌트에서 데이터 받는 곳: 매개변수!
      function ChildComponent({ name: string }) { ... }
      @ 컴포넌트의 props는 객체로 전달
      @ 키="값" 전달은 (객체명: { 키: 데이터타입 }) 매개변수 구조로 인식
      @               >> 해당 타입 구조는 타입 별칭으로 정의 가능
      @ props로 전달된 데이터는 자식 컴포넌트에서 readonly처럼 사용
  : 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용

  ? HTML 속성
    <a href="이동할 수신처 경로" />

*/

//! 1. 단일 Props 사용
function ChildComponent(props: { name: string }) {
  // props.name로 사용
  // : props는 readonly 속성이기 때문에 값의 재할당이 불가!
  // props.name = '이도경';

  return (
    <div>
      안녕하세요 {props.name}님
    </div>
  )
}

//? 구조 분해 할당을 사용한 props 활용
//  +) props 타입 정의 '타입 별칭' 사용
type Child2PropsType = {
  name: string;
}

function ChildComponent2({ name }: Child2PropsType) {
  return (
    <div>
      안녕하세요 {name}님
    </div>
  )
}

//! 2. 다중 Props 사용
function MultiProps(props: { name: string; colorProps: string; }) {
  // props.name
  // props.colorProps
  // : 여러 개의 props가 전달되더라도 하나의 객체로 전달받음!
  // > 하나의 객체에 전달 받거나
  //   한 번에 각각의 요소 변수에 할당하는 구조 분해 할당도 가능
  
  // props.name = 'CHO SEUNG BEOM'; - 읽기 전용 속성

  return (
    <div style={{ color: props.colorProps }}>반갑습니다. {props.name}님</div>
  )
}

type Multi2Type = {
  name?: string;      // 선택적 프로퍼티
  colorProps: string;
}

//? 기본값 지정 (기본 매개변수 & 기본 속성값)
function MultiProps2({ name = '개구리', colorProps }: Multi2Type) {
  return (
    <div style={{ color: colorProps }}>반갑습니다. {name}님</div>
  )
}

//#=== Props 정리 ===//
// 1) 부모 -> 자식: 단방향 데이터 흐름
// 2) 자식은 props를 읽기만 가능 (readonly)
// 3) 상태 변경이 필요하면 부모로부터 콜백 함수를 받아서 수행해야 함

//! 부모 컴포넌트
function G_Props() {
  const props = {
    colorProps: 'lightgray',
    name: '이지희'
  }

  return (
    <Wrapper>
      <ChildComponent name='이승아' />
      <ChildComponent2 name='이도경' />

      <MultiProps name='조승범' colorProps='lightblue' />
      <MultiProps2 name='김명진' colorProps='lightcoral' />
      <MultiProps2 colorProps='lightgreen' />

      {/* ...props가 구조 분해 할당을 사용하여 각각의 속성명을 찾아감 */}
      <MultiProps2 {...props} />
    </Wrapper>
  )
}

export default G_Props