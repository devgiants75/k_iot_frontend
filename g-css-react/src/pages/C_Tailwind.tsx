import React from 'react'
import './tailwind.css';

//! Tailwind CSS
// : Utility-First CSS 프레임워크
// - 미리 디자인된 컴포넌트가 아니라!
//   , 원자적 유틸리티 클래스를 조합해 UI를 만드는 방식

// cf) Bootstap / MUI처럼 컴포넌트를 제공하는 것이 아니라
//     , CSS 속성이 바로 클래스로 제공됨

//@ 장점
// 1) 개발 속도 향상 (스타일 시각화가 빠름)
// : HTML/JSX에서 바로 스타일링 가능 (클래스만 봐도 디자인이 보임!)

// 2) CSS 파일 거의 없음 
// : 따로 CSS 파일 생성 필요 X (클래스명 충돌 가능성 고민 X)

// 3) 반응형 편리함

// 4) 디자인 시스템 운영 쉬움
// : 팀 간 UI 스타일 일관성 보장
// : 모든 spacing/color/font가 scale 기반

// 5) 확장성 높음
// : tailwind.config.js (커스텀 가능)

//@ 단점
// 1) HTML/JSX 클래스가 길어짐
// : 코드 가독성 저하

// 2) 익숙해질 때까지 시간이 필요
// : tailwind 규칙 암기에 시간 소요

// 3) 디자인 설계 없이는 똑같은 UI만 복사
// : 디자인 시스템 없이 사용하면 'tailwind를 사용한 일반 CSS와 다름없음'


const buttonStyle = {
  padding: '10px',
  background: 'blue',
  color: 'white',
  borderRadius: '4px'
}

function C_Tailwind() {
  return (
    <div>
      <button style={buttonStyle}>객체로 스타일 지정하는 버튼</button>
      <button className='button'>클래스로 지정하는 버튼</button>
      <button className='p-4 bg-blue-500 text-white rounded-lg'>
        tailwind CSS 적용한 버튼
      </button>

      <div className='text-sm md:text-base lg:text-xl'>
        한 요소에서 모든 반응형 처리 가능
      </div>
    </div>
  )
}

export default C_Tailwind