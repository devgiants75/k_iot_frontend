import React, { useState } from 'react'

//! 리액트 이벤트 객체 타입 정의
// : 이벤트 종류에 따라 타입 정의가 다름!

//? React.ChangeEvent
// : 입력 필드에 대한 변경 이벤트

//? React.ClickEvent
// : 클릭에 대한 이벤트

//? React.FormEvent
// : 폼 제출에 대한 이벤트
// - 폼 제출 기본 동작 방지 (e.preventDefault();)

// +) React.KeyboardEvent : 키보드 이벤트
// +) React.MouseEvent    : 마우스 이벤트

function State03() {
  //^ === Hooks ===
  const [count, setCount] = useState<number>(0);
  // const count = 0;
  // const setCount = () => {}
  const [name, setName] = useState<string>('');
  const [enter, setEnter] = useState<string>('');

  //^ === Event Handler ===
  //@ 클릭 마우스 이벤트 핸들러
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(prevCount => prevCount + 1);
    // setCount(count++); - 상수에 재할당 불가!

    console.log(e);
  }

  //@ 변경 이벤트 핸들러
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(e.target);
  }

  //@ 키보드 이벤트 핸들러
  const handleKeyBoardEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);

    if (e.key === 'Enter') {
      console.log('Enter 키가 눌러졌습니다.');
    }
  }

  const handleKeyBoardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnter(e.target.value);
  }

  return (
    <div>
      <h5>이벤트 객체의 여러 타입</h5>

      <p>현재 카운트: {count}</p>
      <button onClick={handleButtonClick}>증가</button>

      <br />
      <input 
        type="text" 
        placeholder='이름을 입력해주세요.' 
        value={name}
        onChange={handleNameInput}
      />

      <br />
      <input 
        type="text" 
        placeholder='키를 눌러주세요.'  
        value={enter}
        onKeyDown={handleKeyBoardEnter}
        onChange={handleKeyBoardInput}
      />
    </div>
  )
}

export default State03