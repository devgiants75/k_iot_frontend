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

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(160deg, #f6d365 0%, #fda085 100%);
  /* 
    @ clamp: CSS 함수 
    : 값을 최소값, 최대값 사이로 제한(clamp)
    - 가운데 인자인 권장값을 계산하여
      , 그 값이 최소보다 작으면 최소값을 최대보다 크면 최대값을
      , 그렇지 않으면 그 권장값을 사용

      ^ vw 단위: viewport width의 약자 (viewport 너비 대비 퍼센트 수치)
  */
  padding: clamp(1rem, 5vw, 3rem);
`;

const LoginCard = styled.div`
  display: grid;
  gap: 1.5rem;
  background-color: #fff;
  padding: clamp(2rem, 5vw, 4rem);
  width: min-content(100%, 420px);
  border: 1px solid #ddd;
  border-radius: var(--radius-md);
  /* align-items + justify-items */
  place-items: center;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #666;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.8rem;
  font-size: 16px;
  width: 100%;
  transition: border 0.2s;

  &:focus {
    border-color: #fda085;
    outline: none;
  }
`;
const LoginButton = styled.button`
  padding: 0.9rem;
  background-color: #fda085;
  color: white;
  border: none;
  border-radius: 0.85rem;
  transition: background 0.2s;
  
  &:hover {
    background: #f6d365;
  }
`;
const FooterText = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center;
`;

export function LoginPage() {
  return (
    <LoginContainer>
      <LoginCard>
        <Title>로그인</Title>
        <Subtitle>로그인하여 웹 페이지를 활용해보세요.</Subtitle>
        <Form>
          <Input type='email' placeholder='이메일' />
          <Input type='password' placeholder='비밀번호' />
          <LoginButton>로그인</LoginButton>
        </Form>
        <FooterText>계정이 없으신가요? 회원가입</FooterText>
      </LoginCard>
    </LoginContainer>
  );
}

function C_StyleComponents() {
  return (
    <>
      <Container>
        <Button>스타일드 컴포넌트를 사용한 버튼</Button>
      </Container>
      <hr />
      <LoginPage />
    </>
  )
}

export default C_StyleComponents