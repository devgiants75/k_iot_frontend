// a_variable.js

//! 변수: 데이터를 저장하기 위한 공간

//* 필수 명명 규칙 //
// - 첫문자: 영문자, _, $만 가능
// - 띄어쓰기 허용 X
// - 대소문자 구분
// - 예약어 사용 X

// let 1num;      - Error
// let num ber;   - Error

//* 선택 명명 규칙 //
// - lowerCamelCase 사용 권장

// EX) now, _now, now$25, now_25  (o)
// EX) 25now, now 25, *now        (x)

//? 올해 연도(currentYear), 태어난 연도(birthYear)
//  나이: age = currentYear - birthYear

//! JS 변수 선언 방식 (2가지 - let, var) //

// 1) 변수 선언 방법: 변수종류 변수명;
let letVar; // Variable(변수)
var varVar;

// 2) 변수 할당(대입) 방법: 변수명 = 데이터(값);
letVar = 10;
varVar = 20;

// 3) 변수 선언과 동시에 초기화
let letVar2 = 10;
let varVar2 = 20;

//! let VS var
// 1. 공통점: 재할당 가능(변수의 특성), 호이스팅 O

//? 호이스팅
//  : 인터프리터(코드를 읽는 기기)가 코드를 실행하기 전 변수, 함수, 클래스 등의 
//      선언문을 해당 범위의 맨 위로 올리는 것

// 2. 차이점
// - let: 동일한 영역 내에서 재선언 불가, 호이스팅 가능(선언부에 올려지고 초기화되지 않아 "접근 불가")
// - var: 동일한 영역 내에서 재선언 가능, 호이스팅 가능(선언 시 undefined 초기화되어 "접근 가능")

//? TDZ(Temporal Dead Zone): 변수가 선언되고 초기화되기까지의 공간
// - let은 TDZ에 있을 경우 사용 불가! 
// - var는 TDZ의 변수값 사용 가능

// let letVar; - let은 재선언 불가
var varVar; // var는 재선언 가능

// letVar3 = 30; // 선언 전 초기화
// console.log(letVar3); 
// ReferenceError: Cannot access 'letVar3' before initialization
// >> 호이스팅이 되지만, 실질적인 선언 문장을 읽기 전 호출이 불가! 

varVar3 = 40;
console.log(varVar3); // 호이스팅과 TDZ 접근 가능으로 내용값 출력 가능

let letVar3;
var varVar3;

//! 변수 선언 예시 (나이 계산 프로그램)
let currentYear = 2025;
let birthYear = 2000;

let age;
age = currentYear - birthYear;

console.log(birthYear + '년도에 태어난 사람의 나이는 ' + age + '세입니다.');

//! 상수(constant)
// : 변하지 않는 수, 한 번 할당된 값 변경 X (재할당 불가)
// - 선언과 동시에 반드시 초기화!

//? 상수 명명규칙 (필수 - 변수와 동일)
//* 선택 명명규칙
//  : UPPER_SNAKE_CASE

const PI = 3.14;
// PI = 2.14; // TypeError: Assignment to constant variable.