//! theme.ts(src/styles/theme.ts)
// : 라이트/다크 테마 모드 정의

import type { Theme } from "@emotion/react";

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#f7f7f8',
    card: '#ffffff',
    text: '#333333',
    accent: '#fda085',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  }
}

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#1e1e1e',
    card: '#2b2b2b',
    text: '#f5f5f5',
    accent: '#f6d365',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
  }
}

export type ThemeType = typeof lightTheme;