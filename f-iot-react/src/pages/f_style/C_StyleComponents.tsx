import React from 'react'
import styled from 'styled-components'

//! styled-components (CSS-in-JS)
// : CSS를 자바스크립트 코드 안에서 작성하는 방식
// - 각 컴포넌트 마다 고유한 클래스명을 자동 생성
// - props로 동적 스타일링 가능
// - ThemeProvider로 색상/폰트/반응형 시스템 통합

//? 스타일드 컴포넌트 설치 방법
// npm install styled-components
// npm install -D @types/styled-components

//? 스타일드 컴포넌트 사용 방법
// const 컴포넌트명 = styled.태그명`
//   스타일 규칙 나열
//   ...
// `;
// +) 기존의 컴포넌트 생성 방법 const 컴포넌트명 = () => {}

// >> 디자인이 입혀진 컴포넌트를 생성 (UI 단위의 컴포넌트 생성)
const Container = styled.div`
  background-color: var(--color-secondary);
  padding: var(--space-lg);
`;

const Button = styled.button`
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-md);
  padding: var(--space-md);
  font-size: var(--font-base);
`;

export const theme = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1e40af',
    secondary: '#6b7280'
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px'
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  }
}

// ctrl + shift + p
// typescript: restart ts server

function C_StyleComponents() {
  return (
    <Container>
      <Button>스타일드 컴포넌트를 사용한 버튼</Button>
    </Container>
  )
}

export default C_StyleComponents