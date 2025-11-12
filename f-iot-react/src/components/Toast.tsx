import { useUIStore } from '@/stores/ui.store'
import React, { useEffect } from 'react'

function Toast() {
  const { toastMessage, hideToast, darkMode } = useUIStore();

  const toastStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: darkMode ? '#222' : '#000',
    color: '#fff',
    borderRadius: '6px',
    padding: '10px 16px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    cursor: 'pointer'
  }

  const closeButtonStyle: React.CSSProperties =  {
    position: 'absolute',
    top: '4px',
    right: '8px',
    fontSize: '14px',
    color: '#ccc',
    cursor: 'pointer'
  }

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(hideToast, 10000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, hideToast]);

  // 조건부 렌더링
  if (!toastMessage) return null;

  return (
    <div style={toastStyle}>
      {toastMessage}
      <span style={closeButtonStyle} onClick={e => {
        e.stopPropagation(); // toast 전체 클릭 이벤트 방지
        hideToast();
      }}>
        x
      </span>
    </div>
  )
}

export default Toast