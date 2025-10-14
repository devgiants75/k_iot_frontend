// callback01.js

//# === 콜백(Callback) 함수(고차 함수) === //

// cf) JS의 함수
function funcName1() {}           // 1) 함수 선언식 - function 필수 / 함수명 필수
const funcName2 = function () {}  // 2) 함수 표현식 - function 필수 / 함수명 선택
const funcName3 = () => {}        // 3) 화살표 함수 - function 생략 / 함수명 생략

//! 1. 콜백 함수 
// : 다른 함수의 "인자"로 전달, 그 함수의 내부에서 실행되는 함수

// cf) 자바스크립트의 자료형
// - 기본 자료형(실제 데이터 값) VS 참조 자료형(데이터의 주소값)
// - JS에서 함수는 '자료형'
//      >> 변수에 할당 가능 & 함수의 매개변수로 전달 가능(인자)

function funcType() {}
console.log(typeof funcType); // typeof 연산자: 데이터의 타입을 문자열로 반환
// >> function

//! 2. 콜백 함수의 필요성 (응용)
// - 비동기 처리: 순차적인 코드 흐름을 개발자가 원하는 방식으로 제어
// - 이벤트 리스너 처리: 사용자 행동에 반응하는 이벤트 내부에서 동작 가능
// - 서버 요청 처리, 타이머 함수: 프로그램의 실행 흐름을 제어

//! 3. 콜백 함수 예시
//? 1) 선언적 함수를 사용한 콜백 함수
console.log('=== 콜백 (선언적 함수) ===');

// 콜백 함수 (다른 함수의 인자로 전달될 값)
function print1(index) {
  console.log(`${index}번째 함수 호출`);
}

// 일반 코드 흐름 로직
function callback1(callbackFunc) { // print 함수가 인자로 전달되면 callbackFunc 매개변수명으로 사용됨 
  for (let i = 0; i < 3; i++) {
    callbackFunc(i + 1); // i의 값은 print 함수의 index 매개변수로 전달
  }
}

callback1(print1);
// 1번째 함수 호출
// 2번째 함수 호출
// 3번째 함수 호출

//? 2) 익명 함수를 사용한 콜백 함수
console.log('=== 콜백 (익명 함수) ===');

const print2 = function(index) {
  console.log(`${index}번째 함수 호출`);
}

callback1(print2);
// 1번째 함수 호출
// 2번째 함수 호출
// 3번째 함수 호출

//? 3) 화살표 함수를 사용한 콜백 함수
console.log('=== 콜백 (화살표 함수) ===');

const evenFunc = evenNum => console.log(`${evenNum} 값은 짝수입니다.`); 
const oddFunc = oddNum => console.log(`${oddNum} 값은 홀수입니다.`);

// function evenFunc(evenNum) {
//   console.log(`${evenNum} 값은 짝수입니다.`);
// }

function callback2(number, callbackFunc1, callbackFunc2) {
  // number 값이 짝수면 callbackFunc1 호출
  //  , 홀수면 callbackFunc2 호출

  if (number % 2 === 0) {
    callbackFunc1(number);
  } else {
    callbackFunc2(number);
  }
}

callback2(3, evenFunc, oddFunc); // 3 값은 홀수입니다.
callback2(4, evenFunc, oddFunc); // 4 값은 짝수입니다.