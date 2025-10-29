// react_vite.ts

//@ == vite를 사용한 리액트 프로젝트 생성 ==

//? cf) npm 7+ (버전 확인 필수)
// node -v
// npm -v

//? 리액트 프로젝트 생성
// npm create vite@latest (프로젝트명첨부)

//! 프로젝트 설정 순서 (터미널에서 대화형으로 진행)
// Project name: 프로젝트 폴더명 
// Package name: package.json의 "name" 속성값 으로 지정 (소문자 작성!!)
// Select a framework: React
// Select a variant: TypeScript

// >> 명령어 실행 폴더 내에 Project name의 리액트(ts) 프로젝트가 생성
//    : 프로젝트 폴더로 이동 (cd Project-name입력 )

//! 프로젝트 초기 설정(★프로젝트 진입점에서 실행!!★)
// package.json에 명시된 의존성 설치 (node_modules 생성)
// : npm install

// 개발 서버 실행 (node_modules 폴더가 있는 프로젝트 최상단에서 실행)
// : npm run dev
// >> 브라우저에 http://localhost:5173/ 열기 

//# Vite로 생성된 React 프로젝트 구조
// 1. node_modules: 설치된 패키지
// 2. public: 정적 파일
// 3. src: source, 실제 코드 작성 폴더
//    - App.tsx: 주요 컴포넌트
//    - main.tsx: 앱 진입점
// 4. index.html: HTML 템플릿
//    : React는 S(single)P(page)A(application)
// 5. package.json: 프로젝트 정보 & 의존성
// 6. tsconfig.json: Typescript 설정
// 7. vite.config.ts: Vite 설정

//# 자주 사용하는 명령어
// 1. npm run dev: 개발 서버 실행(핫 리로딩 포함)

// cf) 핫 리로딩
// : 앱을 처음부터 다시 시작하지 않고
//   , 새로운 코드 변경에 따른 해당 변경 사항만 실시간 반영하는 기능

// 2. npm run build: 프로덕션 빌드 생성 (dist 폴더)
// 3. npm run preview: 빌드된 앱 미리보기 (build 후 사용 가능)

//* React 실행 시 자주 발생하는 에러
// 1. npm is not recognized
// : npm install
// 2. Permission denied(macOS)
// : 명령어 앞에 sudo 추가 || 권한 설정 확인

//# 1. package.json
/*
{
  "name": "korea-sleeptech-react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": { //! npm run 이후의 명령어
    "dev": "vite", 
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": { //! 애플리케이션 동작과 연관된 의존성 라이브러리
    "react": "^19.0.0", //? 리액트 라이브러리
    "react-dom": "^19.0.0" //? 실제 DOM과 연결해주는 라이브러리
  },
  "devDependencies": { //! 애플리케이션 동작과는 무관하지만 개발 시 필요한 의존성 라이브러리 
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10", //? TypeScript용 리액트 타입 정의
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4", //? React 플러그링 (JSX 지원)
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "typescript": "~5.7.2", //? TypeScript 컴파일러
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0" //? Vite 번들러
  }
}
*/ 

//# 2. tsconfig.app.json
// : TypeScript 설정 파일

//# 3. vite.config.ts
// : Vite 설정 파일
// - Vite 프로젝트의 빌드/개발 설정 담당
// - 플러그인, 경로 alias, 서버 설정 등을 설정 가능

/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], //! React JSX를 인식하기 위한 플러그인
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //! @ 기호를 src 폴더로 인식
    }
  }
})
*/

// src/pages/homePage/index.tsx
// @/pages/homePage/index.tsx

//# 4. index.html
// : 진입점 HTML 템플릿
// - React 앱을 실행할 HTML 뼈대를 제공
// - 개발 중에도 해당 파일을 기준으로 동작 (Vite가 해당 파일을 분석하여 앱 실행)