import React from 'react'

//! 리액트 Style 적용 

//? 1. 일반 CSS
// : React 프로젝트에서 가장 기본적이고 전통적인 스타일링 방법
// - 장점) 빠르고 단순함
// - 단점) 클래스 충돌 위험, 컴포넌트 단위 관리 어려움
// @ "Global CSS"로써 사용 시
// - CSS 파일을 전역으로 import하여, 모든 컴포넌트에 스타일 적용 

//? 2. 일반 CSS 사용 방법
// : 별도의 설정 필요 없이 .css 파일 import
// cf) src/styles 폴더를 두고 글로벌 스타일을 체계적으로 관리하는 것이 실무 표준

//? 3. 일반 CSS를 Global CSS로 사용하는 방법
//@ - reset.css      : 초기화 (UI 프레임워크와 상관없이 필수)
//@ - variables.css  
//   : CSS 변수 정의 (색상, spacing, typography 등 디자인 시스템을 변수로 관리)
//@ - global.css     : 레이아웃 + 공통 요소 

//? 4. 일반 CSS 사용 팁!
// 1) 초기 세팅: reset.css + variables.css + global.css (3단 구성)
// 2) 반응형 대응: @media 대신 flex / grid 활용
// 3) 전역 테마: CSS 변수 기반 다크모드 테마 구현 편리
// 4) 페이지 일관성
// 5) 유지보수: 컴포넌트 단위가 많아지면 CSS Module, styled-components로 전환

function A_CSS() {
  return (
    <div>
      {/* 바로 적용 가능, 빠르고 직관적 / 클래스명 충돌 가능성! */}
      <button className='btn'>Global.css 적용한 버튼</button>
    </div>
  )
}

export default A_CSS