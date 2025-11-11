import { useAuthStore } from '@/stores/auth.store';
import React from 'react'

function SignOut() {
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  }
  return (
    <button onClick={handleLogout}>
      로그아웃
    </button>
  )
}

export default SignOut