import './App.css'
import Basic from '@/pages/a_basic';
import { Img } from './pages/a_basic/C_Component';

function App() {
  return (
    <>
      <h1>안녕하세요 첫 리액트입니다 :)</h1>
      <Basic />
      {/* 
      <div style={{ backgroundColor: 'orange' }}>
        <Img />
      </div> 
      */}
    </>
  )
}

export default App
