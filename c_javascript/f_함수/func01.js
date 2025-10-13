// func01.js (function 함수 키워드 축약형)

//% === 자바스크립트 함수 === //

//! 1. 함수의 정의
// : 특정 작업을 수행하거나 값을 계산하는데 사용되는 코드의 묶음(집합)

//! 2. 함수 사용 용도/예제

//? 1) 코드 재사용

// EX) 두 수의 합을 계산: f(x) = y
function sum(a, b) {
  return a + b;
}

let result1 = sum(1, 2);
console.log(result1); // 3
let result2 = sum(3, 5);
console.log(result2); // 8

// cf) 자바 메서드와의 차이
// - 함수 정의 키워드: function
// - 반환 타입 정의 X
// - 매개변수 타입 정의 X
//    >> 모든 유형의 데이터 전달 가능! / 모든 유형의 데이터 값 반환 가능!

//? 2) 모듈화 & 추상화
// : 복잡한 작업을 수행하는 코드를 함수로 분리
// - 각 함수가 수행하는 작업에 집중

// cf) 추상화: 특정 기능을 하는 그룹의 공통된 기능을 정의

//? 3) 이벤트 처리
// : 웹 페이지에서 발생하는 다양한 이벤트 처리에 사용

// == Error (터미널 실행 시 오류 발생) ==
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// function message() {
//   console.log('버튼이 클릭되었습니다.');
// }

// button1.addEventListener('click', message); // button1 요소에 클릭 이벤트 발생 시 messae 기능 적용
// button2.addEventListener('click', message); // button2 요소에 클릭 이벤트 발생 시 messae 기능 적용