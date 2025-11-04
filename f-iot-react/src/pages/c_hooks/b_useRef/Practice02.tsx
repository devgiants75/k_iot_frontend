import React, { useEffect, useRef, useState } from 'react'

//! 예제2) DOM 요소 제어 (스크롤 이동)

function Practice02() {
  //^ === Hooks === //
  const [messages, setMessages] = useState<string[]>([
    "메시지 1",
    "메시지 2",
    "메시지 3",
    "메시지 4",
    "메시지 5",
    "메시지 6",
    "메시지 7",
    "메시지 8",
  ]);

  const messageEndRef = useRef<HTMLDivElement>(null);

  // const messages = Array.from({ length: 15 }, (_, i) => `메시지 ${i + 1}`);

  //? messages 값이 갱신될 때마다 콜백 함수 실행
  // useEffect(() => {
  //    //@ behavior 속성: 이동 효과를 설정 
  //    //@ block 속성: 스크롤 맞춤 설정 (end: 하단 맞춤, center: 중앙 맞춤)
  //   messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  // }, [messages]);

  // 메시지 1 ~ 메시지 15의 유사 배열을 실제 배열로 변환

  const handleAddMessage = () => {
    const newMessage = `메시지 ${messages.length + 1}`;
    setMessages(prev => [...prev, newMessage]);
  }

  return (
    <>
      <button onClick={handleAddMessage}>메시지 추가</button>
      <div
        style={{
          backgroundColor: '#fafafa',
          padding: '10px',
          border: '1px solid #ccc',
          // 콘텐츠가 지정된 영역을 넘어설 때에만 스크롤바를 자동으로 생성
          overflowY: 'auto',
          height: '150px'
        }}
      >
        {messages.map(msg => <div key={msg}>{msg}</div>)}
        <div ref={messageEndRef} />
      </div>
    </>
  )
}

export default Practice02