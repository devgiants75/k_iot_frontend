import React from 'react'
import type { User } from './State06'

type ChildProps = {
  userData: User | undefined;
}

function State06_Child({ userData }: ChildProps) {
  return (
    <div>
      <p>자식 컴포넌트 (부모로부터 데이터를 전달받음)</p>
      {userData && (
        <>
          <p>사용자 이름: {userData.name}</p>
          <p>사용자 키: {userData.height}</p>
        </>
      )}
      {/* <p>{userData.name}</p> */}
    </div>
  )
}

export default State06_Child