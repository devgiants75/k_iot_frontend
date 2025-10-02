// b_loop.js

//% == 자바스크립트 '반복문' == //
// : 동일한 코드블록을 여러 번 실행하는 제어문
// - for, while, do-while (for...in 반복문, for...of 반복문)

// cf) 자바스크립트 배열 선언
// : 변수종류 변수명 = [요소1, 요소2, 요소3, ...];
// > 하나의 배열에 여러 데이터 타입의 요소 저장 가능

let fruits = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4, 5];
let bools = [true, false];

// JS 배열에는 요소의 모든 타입이 동시에 삽입 가능
let js = [1, '자바스크립트', true, null, undefined, [1, 2, 3]];

// 배열 요소 접근: 배열명[인덱스번호]
// 배열 길이 확인: .length 속성

/*
for (초기화식; 종료조건; 증감식) {
  표현의 결과가 참인 동안 실행
}
*/
console.log('== for 반복문 ==');
for (let i = 0; i < 5; i++) {
  // 초기화 0 + N 미만 조건: N번 반복
  // 초기화 1 + N 이하 조건: N번 반복
  console.log(i);
}

//? 별찍기
/*
*
**
***
****
*****
*/

// 행에 대한 반복: 5번 반복
for (let i = 1; i <= 5; i++) {
  let stars = '';

  // 별의 개수에 대한 반복: 1 ~ 5까지 증가
  for (let j = 0; j < i; j++) {
    // 1행일 때 j = 0     (1번 반복: 별 1개)
    // 2행일 때 j = 0, 1  (2번 반복: 별 2개)
    // 3행일 때 j = 0, 1, 2 (3번 반복: 별 3개)
    stars += "*";
  }
  console.log(stars);
}

//% while문
// : 주어진 조건이 참인 동안 코드 블록을 계속 실행 

/*
while (조건식) {
  반복할 코드
}
*/

console.log('for 반복문');
for (let a = 0; a < 5; a++) { // 초기화식, 조건식, 증감식
  console.log(a);
}

console.log('while 반복문');
// 초기화식
let b = 0;

while (b < 5) { // 조건식
  console.log(b);

  // 증감식: 반복이 되는 반복문 스코프 내에 작성! 
  b++;
}

//% do-while문
// while문과 유사, 조건 확인 전 반드시 한 번은 코드 블록을 실행

/*
do {
  반복할 실행 블록
} while (조건식);
*/

console.log('do-while 반복문');
let c = 0;

do {
  console.log(c);
  c += 1; // c++;
} while (c < 5);