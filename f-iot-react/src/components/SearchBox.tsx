import React from "react";

//! 검색 입력 UI
// - 검색어 입력 필드
// - 검색 버튼 / 초기화 버튼

interface SearchBoxProps {
  query: string; //^ 검색어 상태
  // React의 useState 훅이 반환하는 setter 함수의 타입 정의
  setQuery: React.Dispatch<React.SetStateAction<string>>; //^ 검색어 변경 함수
  handleSearch: () => void; //^ 검색 실행 함수
  reset: () => void; //^ 초기화 함수
  inputRef: React.RefObject<HTMLInputElement | null>; //^ input 참조
  loading: boolean; //^ 로딩 상태
}

function SearchBox({
  query,
  setQuery,
  handleSearch,
  reset,
  inputRef,
  loading,
}: SearchBoxProps) {
  return (
    <div className="search-box">
      <h4>상품 검색</h4>
      {/* 검색어 입력창 */}
      <input
        type="text"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
      />

      {/* 버튼 영역 */}
      <div className="buttons">
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "검색 중..." : "검색"}
        </button>
        <button onClick={reset}>초기화</button>
      </div>
    </div>
  );
}

export default SearchBox;
