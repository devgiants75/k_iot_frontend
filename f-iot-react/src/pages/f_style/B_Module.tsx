import React, { useState } from 'react'
import styles from './B_Module.module.css';
// import 객체명 from 'CSS Module 파일명';
// > 객체명.클래스명;
import flexStyles from './flex.module.css'
import gridStyles from './grid.module.css'

//! CSS Module
// : 전역적인 CSS 적용 X, 컴포넌트 단위로 CSS를 작성하는 기능 (모듈화)
// - 클래스 이름이 자동으로 로컬 범위(Scope)로 변환되는 방식
//   > 각 컴포넌트에 대해 고유한 클래스 이름을 생성 + CSS 스타일 적용
// EX) Button.tsx
//     Button.module.css
//     Card.tsx
//     Card.module.css
// - 클래스 이름 충돌 X, Typescript 타입 지원 O
// - 리액트 컴포넌트 스타일 유지 + 성능/유지보수성/가독성이 좋은 CSS 작성

//? 1. CSS Module 사용 방법
// 해당 컴포넌트에서 import 시 CSS 스타일이 객체로 인식됨
// : 내부의 스타일 선택자를 객체의 속성처럼 사용

//? 2. CSS Module 사용 팁
// 1) 각 컴포넌트별 폴더 구조 유지
// 2) 전역 스타일(variables.css)과 조합하여 사용
// 3) 유지보수가 컴포넌트 수준에서는 완결적

export const Button = () => {
  const [variant, setVariant] = useState<"primary" | "secondary">("primary");

  const handleToggleStyle = () => {
    setVariant(variant === "secondary" ? "primary" : "secondary");
  }

  return (
    <button 
      onClick={handleToggleStyle}
      className={`${styles.button} ${variant === 'secondary' ? styles.secondary : ""}`}
    >
      CSS Module을 사용하는 버튼입니다.
    </button>
  );
}

//@ Header 컴포넌트: flex 사용
// cf) flex는 한 줄에 정렬할 때 효율적
//     : 헤더, 버튼 그룹, 푸터, 카드 내부 요소
//     > 주로 수평/수직 정렬, 리스트 아이템 배치에 사용
export const Header = () => {
  return (
    <header className={flexStyles.flexRow}>
      <h3>웹 사이트 헤더입니다.</h3>
      <nav>
        <button>로그인</button>
        <button>회원가입</button>
      </nav>
    </header>
  );
}

//@ Dashboard 컴포넌트: grid 사용
// cf) 주로 대시보드, 상품 카드 리스트, 갤러리 형태에 사용
//     : 가로/세로 모두 관리할 때 강력하게 배치 가능

//^ Grid 레이아웃 시스템
// 1) 설계 방향: 행(row)과 열(column)의 격자(grid) 기반
// 2) 주요 목적: 복잡한 카드 / 대시보드 / 갤러리 레이아웃 구성
// 3) 적용 대상: display: grid;를 가진 부모 컨테이너

//^ 기본 속성 정리
// display: grid;         - 그리드 컨테이너 활성화 
// gird-template-columns  - 열 개수 / 크기 정의    EX) repeat(3, 1fr)
// gird-template-rows     - 행 개수 / 크기 정의    EX) auto 200px 1fr
// gap                    - 아이템 간 간격         EX) gap: 16px;

export const Dashboard = () => {
  return (
    <>
      <section className={gridStyles.dashboard}>
        <h3>오늘 예약 현황</h3>
        <div className={gridStyles.stats}>
          <div className={gridStyles.card}>
            <h4>예약 완료</h4>
            <p>24건</p>
          </div>
          <div className={gridStyles.card}>
            <h4>예약 완료</h4>
            <p>24건</p>
          </div>
          <div className={gridStyles.card}>
            <h4>예약 완료</h4>
            <p>24건</p>
          </div>
        </div>
      </section>
      <hr />
      <section className={gridStyles.dashboard}>
        {/* 3개의 아이템이 자동으로 3열 구조로 배치 */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)'
            }}
        >
          <div style={{ padding: '16px', border: '1px solid #ddd'}}>1</div>
          <div style={{ padding: '16px', border: '1px solid #ddd'}}>2</div>
          <div style={{ padding: '16px', border: '1px solid #ddd'}}>3</div>
          <div style={{ padding: '16px', border: '1px solid #ddd'}}>4</div>
        </div>
      </section>
      <hr />
      <section>
        <div className={gridStyles.gridResponse}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i}>카드 {i  + 1}</div>
          ))}
        </div>
      </section>
      <hr />
      <section>
        <div className={gridStyles.gridLayout}>
          <div className={gridStyles.item1}>1</div>
          <div className={gridStyles.item2}>2</div>
          <div className={gridStyles.item3}>3</div>
        </div>
      </section>
    </>

  )
}


function B_Module() {
  return (
    <div>
      <Header />
      <Button />
      <Dashboard />
    </div>
  )
}

export default B_Module