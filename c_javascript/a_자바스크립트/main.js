// main.js
//! 자바스크립트 파일 확장자: .js

// cf) 주석
//    단축키: ctrl + /

// 1) 한 줄 주석: //
// 2) 여러 줄 주석: /**/

// JS의 주석입니다.
/*
  JS의
  여러 줄
  주석입니다.
*/

/*
! 자바스크립트 소개

  - html
    : 웹 콘텐츠를 구성하고 의미를 부여하는 데
      사용하는 마크업 언어
  - css
    : HTML 콘텐츠에 스타일을 적용하는 데 
      사용하는 스타일 규칙 언어

  - javaScript
    : 서버나 웹에서 작동하는 프로그램을 만드는 등
      웹의 모든 부분을 다룰 수 있는 스크립팅 언어이자 프로그래밍 언어

  ! 자바스크립트의 활용
    1. 웹 클라이언트 애플리케이션 개발 (프론트엔드)
      사용자가 웹 요소를 제어하는 웹 사이트의 User Interface 부분에 활용 가능

      User Interface: 메뉴, 텍스트, 팝업 등
        사용자가 사이트를 편리하게 사용할 수 있도록 하는 모든 디자인 요소
      
      웹 애플리케이션: 다양한 기능을 가진 웹 페이지
        ex. 별도의 설치 없이 웹 브라우저 만으로도 해당 애플리케이션 기능 사용 가능한 웹

    2. 웹 서버 애플리케이션 개발 (백엔드)
      Node.js 개발로 자바스크립트로도 웹 서버 애플리케이션 개발 가능

    3. 모바일 프론트 애플리케이션 개발
      안드로이드 - 자바, 코틀린
      아이폰 - 스위프트
      
      리액트: '페이스북'에서 자바스크립트로 '모든 모바일 운영체제에서 사용 가능한' 리액트 네이티브 개발

  ! 자바스크립트의 버전
    ECMAScript 표준 - JS의 새로운 기능과 동작을 정의
    ECMAScript 2015 (ES6)
    ESNext - ES6 이후에 계속 업데이트 되고 있는 버전

  ! 자바스크립트의 특징
    1. 동적 언어
      : JS가 실행되는 시점에서 해석되는 언어
    2. 객체 기반
      : 객체를 사용하여 데이터와 함수를 묶을 수 있는 언어
    3. 이벤트 기반
      : 이벤트 기반 프로그래밍을 지원
        사용자의 행동(클릭, 키보드 입력, 마우스 이동 등)에 따라
        코드가 실행되는 방식

  ! 자바스크립트의 주요 기능
    '이론, 읽어보면 좋은 배경 지식'

    - DOM 조작: 문서 객체 모델(DOM)을 사용하여 HTML 및 CSS를 동적으로 조작 가능
    - 비동기 처리: AJAX, Fetch API 등을 이용하여 비동기적으로 서버와 통신하고 데이터를 처리
    - 프레임워크 및 라이브러리: Angular, React, Vue.js 등 
                                다양한 자바스크립트 기반 프레임워크를 통해 복잡한 애플리케이션 개발 지원
*/

//# 간단한 JS 예제 #//

// 기능
// : 버튼을 클릭하면 새로운 이름을 입력받는 창이 생성, 작성된 이름으로 버튼 내의 Player 명이 변경

// 현재 웹 문서에서 button 태그를 찾아 저장
// ? query(질문하다)Selector(선택자를)
const button = document.querySelector('button');

// 저장된 변수에 클릭 이벤트를 추가
// 변수명.기능();
// >> 객체의 속성/메서드 사용 .연산자 사용
// ? add(더하다)EventListner(이벤트읽기를)
button.addEventListener('click', updateName);

// updateName: 새로운 이름을 입력받고 버튼을 수정하는 기능
// 사용자 정의 함수
function updateName() {
  const name = prompt('새로운 이름을 입력해주세요.');
  button.textContent = `Player 1: ${name}`;
}

//! 플러그인 설치
// - 코드 스니펫(JavaScript (ES6) code snippets) 설치
// >> JS 단축키 제공

// clg: console.log();
// >> 출력문(콘솔 창 출력)
//    - 간단한 코드, 결과값 출력 (개발자 친화적 코드)
// >> [개발자 도구(f12, ctrl + shift + i)] - [Console(콘솔)]
console.log('안녕하세요');

// fun
function name(params) {
  
}

// fof
for (const item of object) {
  
}

// fin
for (const item in object) {
  
}

// imp
// import moduleName from 'module';