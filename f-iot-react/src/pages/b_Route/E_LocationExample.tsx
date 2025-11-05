import React from 'react'
import { useLocation } from 'react-router-dom'

function E_LocationExample() {
  const location = useLocation();

  return (
    <div>
      <h4>useLocation 실습 페이지</h4>
      <p>현재 경로: {location.pathname}</p>
      <p>전달된 state: {location.state || '전달된 데이터 없음'}</p>
    </div>
  )
}

export default E_LocationExample