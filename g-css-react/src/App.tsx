import { ThemeProvider } from '@emotion/react'
import './App.css'
import { useState } from 'react'
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Dashboard from './components/Dashboard';

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {/* <h1>G-CSS-REACT 프로젝트</h1> */}
      <Dashboard toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
