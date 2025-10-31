import React from 'react'

// 1. GreetingCard 컴포넌트 정의
interface GreetingProps {
  name: string;
  message?: string;
}

const GreetingCard: React.FC<GreetingProps> = ({ name, message }) => {
  return (
    <div>
      {/* message가 없으면 'Hello!'를 대신 출력 */}
      <p>{name}: {message || "Hello!"}</p>
    </div>
  );
};

function Example_Answer() {
  const users = [
    { name: "곰", message: "오늘도 화이팅!" },
    { name: "호랑이" },
    { name: "사자", message: "리액트 재밌어요!" }
  ];

  return (
    <div>
      <h2>인사 카드 리스트</h2>
      {/* 배열 렌더링 */}
      {users.map((user, index) => (
        <GreetingCard key={index} name={user.name} message={user.message} />
      ))}
    </div>
  )
}

export default Example_Answer;