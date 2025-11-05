import React from 'react'
import { useLocation } from 'react-router-dom'

//! useLocation
// : 현재 페이지의 URL 정보를 객체로 반환
// - 브라우저 주소창의 상태를 리액트 내부에서 가져오는 방법

/*
  ? location 객체 구조
  - pathname: 현재경로
  - search  : 쿼리스트링
  - hash    : 해시
  - state   : navigate로 전달된 임시 데이터
  - key     : 내부 라우터 키값
*/

function D_useLocation() {
  // location 객체를 반환
  const location = useLocation();

  return (
    <div>
      <h4>useLocation</h4>
      <p>현재 경로: {location.pathname}</p>
      <p>쿼리: {location.search}</p>
      <p>해시: {location.hash}</p>
      <p>State값: {location.state}</p>
    </div>
  )
}

export default D_useLocation