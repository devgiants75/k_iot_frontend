import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';
import { theme } from './pages/f_style/C_StyleComponents.tsx'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* 스타일드 컴포넌트 내부의 전역 스타일 데이터를 공유 */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
