// useSearch.ts

import { useEffect, useRef, useState } from "react";

/*
  ! useSearch 커스텀 훅
  - 검색어 입력값(query) 관리
  - 로딩 상태 관리
  - 검색 결과 상태 관리
  - input 요소 자동 포커스 관리
*/

export function useSearch(initialValue: string = '') {
  //^ === Hooks === //
  const [query, setQuery] = useState<string>(initialValue);
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 컴포넌트가 처음 마운팅 될 때 input에 포커스 자동 지정
  useEffect(() => {
    // inputRef.current? -> 조건문 대신
    inputRef.current?.focus();
  }, []); // 빈 배열: 마운팅 시 한 번 실행

  //^ === Event Handler === //
  /*
    ! 검색 실행 함수
    - query가 비어있지 않으면 로딩 시작
    - 실제 서비스에서는 fetch | axios API 요청으로 대체
  */ 
  const handleSearch = () => {
    if (!query.trim()) return; // 빈 문자열 방지

    setLoading(true); // 로딩 상태 시작
    setResults([]); // 기존 결과 초기화

    //? +) 모의 검색 기능
    setTimeout(() => {
      // 모의 검색 결과
      const mockResults = [
        `${query} 관련 상품 1`,
        `${query} 관련 상품 2`,
        `${query} 관련 상품 3`,
        `${query} 관련 상품 4`,
      ];
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  }

  /*
    ! 검색 상태 초기화 함수
    - 검색어, 결과 모두 리셋 후 input에 포커스
  */
  const reset = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  }

  //! 반환 객체 (커스텀 훅 사용자에게 제공)
  return {
    query,
    setQuery,
    results,
    loading,
    inputRef,
    handleSearch,
    reset
  }
}