// obj01.js

//! 자바스크립트 내장 객체
// : 특정 작업 수행이나 복잡한 기능을 담은 메서드와 속성 제공

//# 1. Number 객체의 기본 메서드
// : 수치형 데이터를 처리하는 속성과 메서드를 포함한 JS 내장 객체
// > number 자료형

//! 1) toFixed(N): N자리까지의 반올림
let num = 123.4567;
console.log(num.toFixed(3)); // 123.457
console.log(num.toFixed(1)); // 123.5
console.log(num.toFixed()); // 123: 자릿수 지정 X - 소수점 전체 반올림 (정수 반환)

//! 2) isNaN(), isFinite()
// : 각각 NaN 값, Infinity() 값인지 확인
// cf) 위 두 값은 비교연산자 사용 X
let notNum = Number('숫자로 변환할 수 없는 값');

console.log(notNum); // NaN
console.log(notNum === NaN); // false
console.log(Number.isNaN(notNum)); // true

// Infinity(양의 무한대) / -Infinity(음의 무한대)
// >> 양수 또는 음수를 0으로 나누면 각각의 무한대 수가 생성

console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity

// cf) finity (finish 끝): 유한
//     infinity: 무한
console.log(Number.isFinite(10 / 0)); // false
console.log(Number.isFinite(10)); // true

//# 2. String 객체의 기본 메서드
// : 문자열을 처리하는 메서드 제공

//! 1) trim(): 문자열 양쪽 공백 제거(띄어쓰기, 줄바꿈)
let str = `
  안녕하세요
  만나서
  반갑습니다 :) 
  백틱만 문자열 내의 줄바꿈을 인식합니다
`;

console.log(str.trim()); // 시작과 끝의 공백만 제거!

//! 2) split(): 문자열을 특정 기호로 나누어 "배열로 반환"
let manyData = `
생년,월,일
1997,03,14
1995,06,13
1991,06,24
1991,09,09
`;

console.log(manyData);
manyData = manyData.trim();

// 줄 바꿈 기호: '\n'
manyData = manyData.split('\n');
console.log(manyData);

manyData = manyData.map(line => line.trim().split(','));
console.log(manyData);
// [
//   [ '생년', '월', '일' ],
//   [ '1997', '03', '14' ],
//   [ '1995', '06', '13' ],
//   [ '1991', '06', '24' ],
//   [ '1991', '09', '09' ]
// ]

//! 3) length
// : 문자열 길이 반환
console.log(' hello, JS ^^'.length); // 13 - 공백과 기호 모두 길이로 측정

//! 4) toLowerCase(), toUpperCase()
// : 대소문자 변환
console.log('HELLO'.toLowerCase()); // hello
console.log('hello'.toUpperCase()); // HELLO