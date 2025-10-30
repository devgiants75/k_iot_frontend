// index.tsx
// : index 파일명은 해당 폴더의 메인 파일로 인식
// - 임포트 시 폴더명만으로 가져오기 가능
import React from 'react'
import B_Counter from './B_React_Counter';
import C_Component, { img, Img } from './C_Component';
import D_JSX from './D_JSX';
import E_JSX from './E_JSX';
import G_Props from './G_Props';
import H_Props from './H_Props';
import I_Rendering from './I_Rendering';
import J_Handler from './J_Handler';

const h2Style = {
  backgroundColor: 'black',
  color: 'orange'
}

// React는 반드시 컴포넌트명이 대문자
function Index() {

  // 해당 함수형 컴포넌트의 리턴값: HTML코드 요소
  return (
    <div>
      <h1
        style={{
          backgroundColor: 'black',
          color: 'white'
        }}
      >=== 리액트 기본 문법 ===</h1>
      <h2 style={h2Style}>1. 리액트 VS 타입스크립트 (카운터 예제)</h2>
      {/* 컴포넌트는 주로 단일 태그로 사용 */}
      <B_Counter />

      <h2 style={h2Style}>2. Component: 리액트를 구성하는 기본 구조</h2>
      <C_Component />
      {/* 컴포넌트: 재사용 가능한 UI 집합 */}
      <div style={{ backgroundColor: 'pink' }}>
        <Img />
        {img()}
      </div>

      <h2 style={h2Style}>3. JSX(TSX): 리액트의 기본 문법</h2>
      <D_JSX />
      <E_JSX />

      <h2 style={h2Style}>4. Props: 리액트의 데이터 전달 (부모/자식)</h2>
      <G_Props />
      <H_Props />

      <h2 style={h2Style}>5. Rendering: 조건부 렌더링</h2>
      <I_Rendering />

      <h2 style={h2Style}>6. Handler: 리액트의 이벤트 핸들러</h2>
      <J_Handler />
    </div>
  )
}

export default Index