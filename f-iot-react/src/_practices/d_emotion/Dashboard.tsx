import styled from '@emotion/styled';
import React from 'react'
import ThemeToggle from './ThemeToggle';
import Card from './Card';

type Props = {
  toggleTheme: () => void;
}

function Dashboard({ toggleTheme }: Props) {
  const data = [
    { title: '오늘 예약', content: '128건' },
    { title: '주문 수', content: '54건' },
    { title: '매출액', content: '1,230,000원' },
    { title: '지점 수', content: '12개' },
    { title: '리뷰 수', content: '87개' },
    { title: '평균 평점', content: '4.8⭐' },
  ]
  return (
    <Container>
      <Header>
        <h1>대시보드</h1>
        <ThemeToggle toggle={toggleTheme} />
      </Header>

      <Grid>
        {data.map((item) => (
          <Card key={item.title} title={item.title} content={item.content} />
        ))}
      </Grid>
    </Container>
  )
}

export default Dashboard

//! 대시 보드 전체 컨테이너
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: clamp(1rem, 3vw, 3rem);
  gap: 2rem;
  min-height: 100vh;
`;

//! 대시보드 헤더 (제목 + 라이트/다크 모드 전환 버튼)
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
`;

//! 대시보드 항목 그리드
const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;