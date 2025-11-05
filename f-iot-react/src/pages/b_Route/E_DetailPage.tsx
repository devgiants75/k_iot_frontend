import React from 'react'
import { useLocation } from 'react-router-dom'

function E_DetailPage() {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div>
      <h4>Detail 페이지</h4>
      <p>전달받은 데이터</p>
      <ul>
        <li>유저 ID: {data.userId}</li>
        <li>유저 이름: {data.username}</li>
        <li>메시지: {data.message}</li>
      </ul>
    </div>
  )
}

export default E_DetailPage