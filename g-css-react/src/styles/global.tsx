//! src/styles/global.tsx
// : 글로벌 스타일 적용 컴포넌트

import { css, Global } from "@emotion/react";
import type { ThemeType } from "./theme";

export const GlobalStyles = ({ theme }: { theme: ThemeType }) => (
  // Global 컴포넌트(@emotion/react)
  // : 전역 스타일링 코드를 styles 속성(필수)으로 전달
  <Global 
    styles={css`
      * {
        box-sizing: border-box;
        transition: background 0.25s, color 0.25s;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background:${theme.colors.background};
        color:${theme.colors.text}
      }
    `}
  />
)