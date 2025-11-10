import React, { createContext, useContext, useState } from 'react'
import { useCountStore } from './B_Zustand';

//! 전역 상태 관리 (Global State)
// : 애플리케이션의 여러 컴포넌트에서 공유해야하는 상태를 중앙에서 관리하는 패턴
// - 프로젝트의 '전체 영역'에서 데이터를 공유하는 방법
// EX) 로그인 상태, 테마 설정(다크/라이트 모드)
//      , 다국어 처리(언어 설정), UI 모달/알림 등

//? 사용 목적
// : props drilling을 없애고 상태 소스의 단일 책임(Single Source of Truth)을 제공
// - 상태 관리를 하나의 파일 단위로 분리
// > 가독성, 재사용성 증가 

//? 주의점
// : 필요한 데이터만 전역 상태에 올릴 것!
//    > 불필요한 리렌더링/복잡성 방지
// : 초기 구축(설계)에 집중할 것!
//    > 성능 문제 고려

//? 종류
//@ 1. Context API (React 기본, 내장 API)
// - 장점) 내장, 간단한 공유용도 적합(테마, auth)
// - 단점) 빈번한 변경 시 리렌더 문제 
//@ 2. zustand
// - 장점) 간결한 API, 부분 구독, 미들웨어, 타입스크립트 친화적

//@ 3. redux(RTK)
// - 장점) 견고함, 디버깅/미들웨어 풍부, 대형 프로젝트 사용
// - 단점) 학습 곡선

//! Context API 
// : React에서 제공하는 '전역 상태 관리 도구'
// - 컴포넌트 '트리' 전체에 걸쳐서 데이터를 효율적으로 전달
// > 상위 컴포넌트 -> 하위 컴포넌트로 props 전달 없이 데이터 공유 가능

// cf) context: 문맥, 환경, 정황, 상태 등
//      > 환경 정보를 통칭 === 상태

//? 1. Context API 구성 요소
// 1) Context 객체 생성 - React.createContext
//    : 데이터를 공유하고자 하는 범위에 대한 Context를 생성
//    - Provider(제공자)와 Consumer(소비자) 컴포넌트를 포함

// 2) Provider - Context 객체로부터 생성된 컴포넌트
//    : 해당 Context를 구독하는 컴포넌트들에게 context의 변화를 알림
//    - Provider가 value 속성을 통해 자식 컴포넌트에게 데이터 전달

// 3) Consumer - Provider로부터 데이터를 받아 사용하는 컴포넌트
//    : Context의 변화를 구독하는 컴포넌트
//    - useContext 훅을 사용하여 해당 데이터에 접근

//! Context API 사용 예제

//@ 사용자 정보
interface User {
  name: string;
}

//@ 상태와 상태 업데이트 함수를 묶은 타입 정의
interface UserContextType {
  user: User | null;
  // React.Dispatch<T>
  // : 어떤 값을 받아서 처리하는 함수 타입
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

//@ Context 생성
const UserContext = createContext<UserContextType | undefined>(undefined);

//@ Provider 생성
// : 해당 컴포넌트 내부의 자식 & 자손 컴포넌트는 useContext 훅을 통해
//    , 데이터 활용 가능
const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  // const name = '이승아';

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

//@ Consumer 생성
const ExampleHeader = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext가 UserProvider 내에서 사용되지 않음');
  }

  const { user, setUser } = userContext;
  
  if (!user) {
    return <button onClick={() =>  setUser({ name: '이승아' })}>로그인</button>
  }

  return (
    <div>
      <h4>프로젝트 헤더</h4>
      <p>{user.name}</p>
    </div>
  );
}

const ExampleNavibar = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('UserContext가 UserProvider 내에서 사용되지 않음');
  }

  const { user, setUser } = userContext;
  
  return (
    <div>
      Hello, { user ? user.name : '게스트' }
      {/* user가 있으면 로그아웃 버튼 표시 */}
      {user && (
        <button onClick={() => setUser(null)}>로그아웃</button>
      )}
    </div>
  );
}


function A_Context() {
  const { count } = useCountStore();
  return (
    <div>
      <UserProvider>

        <h3>Example Header</h3>
        <ExampleHeader />
        <h3>Example Navibar</h3>
        <ExampleNavibar />

      </UserProvider>
      {/* UserContext가 UserProvider 내에서 사용되지 않음 */}
      {/* <ExampleHeader /> */}
      {count}
    </div>
  )
}

export default A_Context