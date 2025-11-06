import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 관리자용 대시보드
function Z_Dashboard() {
  const [productNumber, setProductNumber] = useState("");
  const navigate = useNavigate();

  const handleGoToProduct = () => {
    if (!productNumber.trim()) {
      alert('상품 번호를 입력해주세요.');
      return;
    }

    navigate(`/products/${productNumber}/info`);
  }

  return (
    <div>
      <h2>관리자 대시보드</h2>
      <p>해당 페이지에서 상품 관리, 리뷰 확인 등 가능</p>

      <div>
        <button onClick={() => navigate("/products")}>상품 목록</button>
        <button onClick={handleGoToProduct}>
          특정 상품 상세로 이동
        </button>
      </div>

      <div>
        <label>상품 번호 입력</label>
        <input
          type="number"
          value={productNumber}
          onChange={(e) => setProductNumber(e.target.value)}
          placeholder="예: 3"
        />
      </div>
    </div>
  );
}

export default Z_Dashboard;
