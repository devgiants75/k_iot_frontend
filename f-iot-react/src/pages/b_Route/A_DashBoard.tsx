import React from 'react'
import { Outlet } from 'react-router-dom'

function A_DashBoard() {
  return (
    <div>
      <h3>대시보드 메인</h3>
      {/* 
        Outlet 태그
        : 중첩된 컴포넌트에서 부모 컴포넌트의 어느 위치에 
          하위 컴포넌트를 렌더링할지 지정해주는 태그
      */}
      <Outlet />
    </div>
  )
}

export default A_DashBoard