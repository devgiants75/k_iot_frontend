import React from 'react'

type MenuItemProps = {
  name: string;
  price: number;
  onAdd?: (itemName: string) => void;
};

function MenuItem({ name, price, onAdd }: MenuItemProps) {
  // 3️⃣ handler 정의
  const handleClick = () => {
    if (!onAdd) return; // onAdd가 없으면 아무 동작도 하지 않음
    console.log(`${name} 메뉴를 장바구니에 추가합니다.`);
    onAdd(name); // 부모에서 전달된 함수 실행
  };

  // 4️⃣ JSX 렌더링
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        width: "240px",
        marginBottom: "10px",
      }}
    >
      {/* 메뉴 정보 표시 */}
      <p style={{ marginBottom: "8px", fontWeight: 500 }}>
        {name} - {price.toLocaleString()}원
      </p>

      {/* onAdd가 존재할 때만 버튼 렌더링 */}
      {onAdd && (
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          장바구니에 추가
        </button>
      )}
    </div>
  );
}

function Example04_Answer() {
  const handleAddToCart = (itemName: string) => {
    console.log(`✅ 상위 컴포넌트에서 처리: ${itemName} 장바구니 추가 완료`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🍔 Example04 - MenuItem 컴포넌트 예제</h2>
      <p>아래는 props 조건에 따라 버튼이 다르게 렌더링됩니다.</p>

      {/* onAdd 전달됨 → 버튼 표시됨 */}
      <MenuItem name="햄버거" price={7000} onAdd={handleAddToCart} />

      {/* onAdd 전달됨 → 버튼 표시됨 */}
      <MenuItem name="피자" price={8000} onAdd={handleAddToCart} />

      {/* onAdd 전달되지 않음 → 버튼 없음 */}
      <MenuItem name="치킨" price={8500} />
    </div>
  );
}

export default Example04_Answer