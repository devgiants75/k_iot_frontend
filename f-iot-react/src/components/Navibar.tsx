import React from 'react'
import { NavLink } from 'react-router-dom';

//! Link VS NavLink 컴포넌트
// : a태그와 유사하게 동작 
// - 새로고침하지 않고 SPA의 다른 경로로 이동
// - 해당 링크 클릭 시 이동할 경로(path) 값을 to 속성으로 지정 (필수 속성, href와 유사)

//? 1) Link
// : 가장 기본 적인 페이지 전환 컴포넌트 (a 태그)

//? 2) NavLink
// : Link + 현재 활성화 된 페이지 경로에 대한 추가적인 스타일 또는 클래스명 적용 가능
//&: 현재 경로에 따라 isActive를 사용하여 스타일이나 클래스를 다르게 지정 가능

function Navibar() {
  const links = ['/', 'basic', 'route', 'hooks', 'http', 'practice/post', 'practice/search'];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '5px',
      padding: '5px 10px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      {links.map(link => (
        <NavLink
          to={link}
          key={link}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'white' : 'black',
            backgroundColor: isActive ? 'black' : 'white',
            margin: '5px',
            padding: '5px 10px',
            borderRadius: '5px'
          })}
        >
          {link === '/' ? 'HOME' : link.toUpperCase()}
        </NavLink>
      ))}
    </div>
  )
}

export default Navibar