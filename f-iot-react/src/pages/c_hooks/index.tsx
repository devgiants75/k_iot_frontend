import React from 'react'
import State01 from './a_useState/State01'
import State02 from './a_useState/State02'
import State03 from './a_useState/State03'
import State04 from './a_useState/State04'
import State05 from './a_useState/State05'
import State06 from './a_useState/State06'
import Ref01 from './b_useRef/Ref01'
import Ref02 from './b_useRef/Ref02'
import Ref_Practice01 from './b_useRef/Practice01'
import Ref_Practice02 from './b_useRef/Practice02'
import Effect01 from './c_useEffect/Effect01'
import Effect02 from './c_useEffect/Effect02'
import Effect_Practice01 from './c_useEffect/Practice01'

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
      <h2 style={h2Style}>3. 리액트 Hooks - useEffect</h2>
      <Effect01 /> <hr />
      <Effect02 /> <hr />
      <Effect_Practice01 /> 

      <h2 style={h2Style}>2. 리액트 Hooks - useRef</h2>
      <Ref01 /> <hr />
      <Ref02 /> <hr />
      <Ref_Practice01 /> <hr />
      <Ref_Practice02 /> <hr />

      <h2 style={h2Style}>1. 리액트 Hooks - useState</h2>
      <State01 /> <hr />
      <State02 /> <hr />
      <State03 /> <hr />
      <State04 /> <hr />
      <State05 /> <hr />
      <State06 /> <hr />
    </div>
  )
}

export default Index