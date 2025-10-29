import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], //! React JSX를 인식하기 위한 플러그인
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //! @ 기호를 src 폴더로 인식
    }
  }
})
