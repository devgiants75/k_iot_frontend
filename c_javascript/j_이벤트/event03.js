// event03.js

//# 페이지 로드 이벤트

//! 1) DOMContentLoaded 이벤트
// DOM + Content + Loaded
// >> 문서 객체 모델의 "내용"이 로드된(출력된) "이후 발생할 이벤트"
// : HTML 문서의 구조(DOM 트리)가 완성되면 발생!
// : 외부 자원(이미지, 스타일 시트)의 로딩은 상관 X

//? DOM
// : Document Object Model (문서 객체 모델)
// - HTML/XML 문서의 구조, 스타일, 내용을 
//    프로그래밍 언어가 접근하고 조작할 수 있도록 객체화한 인터페이스

//! 2) load 이벤트
// : 페이지의 모든 콘텐츠가 완전히 로드된 경우에만 발생
// : HTML 문서와 함께 이미지, 스타일 시트 등 모든 외부 자원의 로딩이 완료된 후 발생

window.addEventListener('load', function() {
  console.log('페이지의 모든 콘텐츠가 로드되었습니다.');
});

// HTML 웹 문서의 구조를 인식한 후 JS 기능이 동작되도록 설정
// >> 안정성 보장
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 트리가 완성되었습니다.');
});