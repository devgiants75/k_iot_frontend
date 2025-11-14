import React from 'react'

//! clamp() 함수
// : 클램프
// - clamp(min, preferred, max)
//   > 최소값 <= 선호값 <= 최대값을 보장하는 CSS 함수
//   > 반응형에 주로 사용 (타이포그래피, 간격, 너비)

//? clamp() 사용 방법
// property(속성): clamp(min, preferred, max);
// 1) min: 허용되는 최소값 (예: 1rem, 14px)
// 2) preferred: 브라우저가 먼저 계산하려고 하는 값 (보통 vw 또는 calc() 사용)
// 3) max: 허용되는 최대값 (예: 2rem, 32px)
// >> 브라우저는 preferred 값을 계산한 뒤
//    , 그 값이 min 보다 작으면 min / max 보다 크면 max를 사용

function B_Clamp() {
  /*
    clamp(1rem, 2.5vw, 2rem)
    
    >> 1rem === 16px (2rem === 32px)

    1) 320px 화면 (모바일 480px 이하)
      : 2.5vw === 320 * 0.025 === 8px
        @ 비교 
          min 16px / preferred 8px / max 32px
          >> 16px (최소값)

    2) 768px 화면 (테블릿: 768px ~ 1024px)
      : 2.5vw === 768 * 0.025 === 19.2px
        @ 비교
          min 16px / preferred 19.2px / max 32px
          >> 19.2px (선호값)

    3) 1440px 화면 (PC: 1024px 이상)
      : 2.5vw === 1440 * 0.025 === 36px
        @ 비교
          min 16px / preferred 36px / max 32px
          >> 32px (최대값)
  */
  return (
    <div
      style={{
        width: 'clamp(280px, 60vw, 1200px)',
        margin: '0 auto'
      }}
    >
      <h1 style={{
        // 1.125rem(=18px) 최소, 2.5vw가 선호, 2rem(=32px) 최대
        fontSize: 'clamp(1.125rem, 2.5vw, 2rem)'
      }}>유동 타이포그래피</h1>

      <button
        style={{
          padding: 'clamp(0.5rem, 1vw, 1rem)'
        }}
      >버튼 패딩을 뷰포트에 맞춰 유동적으로</button>

    </div>
  )
}

export default B_Clamp