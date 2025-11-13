/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled';
import React from 'react'

//! Emotion (CSS-in-JS)
// : JS로 CSS 스타일을 작성하도록 설계된 라이브러리
// - 프레임워크에 구애 받지않고 사용 가능
// - styled-components와 함께 CSS-in-JS의 양대산맥

//? 설치 명령어 (별도 타입 설치 필요 X, 기본 타입 지원!)
// npm install @emotion/react @emotion/styled

//? 장점
// : 컴포넌트 기반 스타일링
// : 조건부 스타일링 (props 기반)
// : ThemeProvider 지원 (전역 테마)

//? 사용 방법
// - styled 또는 css prop으로 스타일 지정

//@ 1) @emotion/react
// : css 함수로 스타일 정의 후 css={} 속성으로 적용

// 스타일 객체를 변수로 저장하고 재사용 가능 
// + className 없이도 스타일 적용 가능

const boxStyle = css`
  width: 300px;
  height: 300px;
  background-color: orange;
`;

// 2) @emotion/styled
// : styled-components 처럼 사용
const EmotionStyledButton = styled.button`
  background-color: hotpink;
  color: white;
  margin: 10px auto;
  padding: 20px;
  border-radius: 16px;
`;

function D_Emotion() {
  return (
    // HTML Element에 css 속성이 없음
    // : Emotion의 css 속성 사용 시 반드시!!! 프로젝트 최상단에 주석 필요!
    <div css={boxStyle}>
      <EmotionStyledButton>이모션 버튼</EmotionStyledButton>
    </div>
  )
}

export default D_Emotion