// emotion.d.ts
import "@emotion/react";

declare module '@emotion/react' {
  export interface Theme {
    mode: 'light' | 'dark'
    colors: {
      background: string
      card: string
      text: string
      accent: string
      shadow: string
    }
  }
}