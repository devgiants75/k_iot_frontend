import React from 'react'

//! 메뉴 항목 컴포넌트 (MenuItem)

//? 학습 포인트
// - 이벤트 핸들러 정의
// - props로 함수 전달받기
// - 단락 평가로 렌더링 제어

//? 시나리오
// : 메뉴 페이지에서 각 음식 항목을 카드로 보여줍니다.
//   "장바구니에 추가" 버튼을 눌렀을 때, 상위 컴포넌트에서 전달한 onAdd 함수가 호출되어야 합니다.

//? 요구사항
//& 1. props로 name, price, onAdd를 받는다.
//& 2. onAdd가 전달된 경우에만, "장바구니에 추가" 버튼을 렌더링 한다.
//& 3. 버튼 클릭 시 onAdd(name)을 호출한다.
//& 4. 호출 시 console.log로도 확인 가능해야 한다.

//? Props 정의
// customerName - string                : 메뉴 이름
// price        - number                : 가격
// onAdd        - (itemName: string) => void (선택적 프로퍼티)      : 장바구니 추가 핸들러

//? 코드 작성 순서
// 1. MenuItemProps 타입 정의
// 2. MenuItem 함수형 컴포넌트 정의 + 구조 분해 할당으로 props 받기
// 2. handler 함수 (handleClick) 정의
// 3. 내부에서 onAdd 존재 여부 확인
// 4. JSX에서 단락 평가로 버튼 표시
// 5. 버튼 클릭 시 handler 연결

//# MenuItemProps 정의

//# MenuItem 컴포넌트 정의
function MenuItem() {
  // 내부에서 handleClick 정의
  const handlerClick = () => {
    // onAdd가 없으면 아무 동작도 하지 않음 (return)

    // 콘솔 출력 - `${name} 메뉴를 장바구니에 추가합니다.`

    // 부모에서 전달된 함수 실행
    // : onAdd(name)
  }

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '12px',
        width: '240px',
        marginBottom: '10px'
      }}
    >
      {/* 메뉴 정보 표시: 이름 - 18,000원 */}
      <p style={{ marginBottom: '8px', fontWeight: 500 }}>

      </p>
      {/* onAdd가 존재할 때만 버튼 렌더링 */}
      {/* +) button 스타일 
        { 
          backgroundColor: '#007bff', 
          color: '#fff', 
          border: 'none', 
          padding: '6px 10px', 
          borderRadius: '4px', 
          cursor: 'pointer'
        } 
       */}

    </div>
  );
}

//# 
function Example04() {
  // 상위 컴포넌트에서 전달할 함수 정의
  // : 매개변수 - 메뉴명
  // : 반환X - 콘솔 출력 `✔️ 상위 컴포넌트에서 처리: ${itemName} 장바구니 추가 완료`
  const handleAddToCard = () => {

  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>🍔 MenuItem 컴포넌트 예제</h1>
      <p>아래는 props 조건에 따라 버튼이 다르게 렌더링 됩니다. (배열로 변환하여 작성해도 가능)</p>
      
      {/* 
        <MenuItem name='햄버거' price={4500} onAdd={handleAddToCard} />
        <MenuItem name='돼지국밥' price={7000} onAdd={handleAddToCard} />
        <MenuItem name='라볶이 세트' price={6000}  /> 
      */}
    </div>
  )
}

export default Example04