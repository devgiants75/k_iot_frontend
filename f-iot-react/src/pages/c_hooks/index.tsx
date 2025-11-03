import React from 'react'
import State01 from './State01'
import State02 from './State02'
import State03 from './State03'
import State04 from './State04'

const h2Style = {
  backgroundColor: 'black',
  color: 'orange'
}

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: 'black', color: 'white' }}>
        === 리액트 Hooks ===
      </h1>
      <h2 style={h2Style}>1. 리액트 Hooks - useState</h2>
      <State01 /> <hr />
      <State02 /> <hr />
      <State03 /> <hr />
      <State04 /> <hr />

    </div>
  )
}

export default Index