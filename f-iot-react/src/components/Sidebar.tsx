import { useUIStore } from '@/stores/ui.store'
import React from 'react'
import Navibar from './Navibar';

function Sidebar() {
  const isSidebarOpen = useUIStore(s => s.isSidebarOpen);
  const darkMode = useUIStore(s => s.darkMode);

  const sidebarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '220px',
    height: '100%',
    backgroundColor: darkMode ? '#333' : '#ddd',
    padding: '10px',
    boxSizing: 'border-box',
    transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease'
  }

  return (
    <aside style={sidebarStyle}>
      <h4>사이드바 메뉴</h4>
      <Navibar />
    </aside>
  )
}

export default Sidebar