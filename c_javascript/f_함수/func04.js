// func04.js

//# 함수 매개변수 (기본 매개변수, 나머지 매개변수) //

//! 1. 기본 매개변수 (default)
// : 함수에 인자를 전달하지 않았을 때 사용되는 기본값 정의
function defaultFunc(param1=value1, param2=value2) {
}

//? cf) 기본 매개변수
// : 값 전달 O - 전달된 값 지정
//   값 전달 X - 기본값 지정
// >> 값 전달의 선택이 있는 경우, 무조건 값 할당이 필요한 데이터보다 뒤에 작성
function greet1(name='비회원 고객', age) {
  console.log(`안녕하세요, ${name}님! ${age}세입니다.`);
}

greet1('이승아', 30); // 안녕하세요, 이승아님! 30세입니다.
greet1(29); // 안녕하세요, 29님! undefined세입니다.

function greet2(age, name='비회원 고객') {
  console.log(`안녕하세요, ${name}님! ${age}세입니다.`);
}

greet2(30, '이승아'); // 안녕하세요, 이승아님! 30세입니다.
greet2(29); // 안녕하세요, 비회원 고객님! 29세입니다.

//! 2. 가변 매개변수
// : 함수 호출 시 인자 수의 고정 X
// - 함수 내부에서 유동적으로 처리

//? JS는 가변 매개변수를 나머지 매개변수(Rest Parameter)를 통해 구현
// >> 함수에 전달된 인자들을 배열의 형태로 전달 받음

// == 구현 방법 == //
// : 매개변수명 앞에 ...(spread 연산자)를 붙여 정의
// > 데이터가 정확하게 지정될 변수가 있는 매개변수 목록들 보다 마지막에 위치

function spreadFunc(num1, num2, ...nums) {
  // num1과 num2에는 정확한 데이터값이 할당
  // : 배열을 담는 변수

  console.log(nums);
}

spreadFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
spreadFunc(1, 2, [1, 2, 3]);
spreadFunc(1, 2, 3);
// >> 스프레드 연산자는 요소를 배열에 전달!

//? == 연습 문제: 전달된 여러 데이터 중 최소값 구하기 == //
// cf) Math.min() 함수: 복수의 인자를 받아 그 중 최소값을 반환

// 매개변수 내의 ...연산자 - 나머지 매개변수
// >> 전달된 인수들을 하나의 배열로 모음
function findMin(...numbers) {

  // 배열의 요소들을 개별 인수로 펼치는 역할 (...연산자 - spread 연산자)
  let minNum = Math.min(...numbers);

  return minNum;
}

console.log(findMin(31, 23, 45, 66, 43, 32)); // 23