// func02.js

//% === 자바스크립트 함수 === //
//! 1. 함수 구현 방법
// function 함수명 (매개변수 나열) {
  //? 매개변수: 함수에 입력으로 제공되는 데이터(값)

  // return 결과값; (생략 가능)
  //? 결과값(return, 리턴값): 함수가 작업 완료 후 반환하는 데이터(값) - return 키워드로 반환
// }

//? 함수 명명 규칙: lowerCamelCase 사용 + 동사 사용 권장

//! 2. 함수 선언 방식

// 1) 함수 선언식
// : function 키워드 사용, 함수명 작성 필수
// > '호이스팅' 적용: 함수 선언 전 호출 가능

greet1(); // 안녕하세요! (함수 선언식)
console.log('== 함수 선언식 선언 이전 ==');

// = 함수 선언(정의) = //
function greet1() {
  console.log('안녕하세요! (함수 선언식)');
}

// = 함수 호출(사용) = //
greet1(); // 함수명();

// 2) 함수 표현식
// : function 키워드 사용, 함수명 사용 선택적
// > '호이스팅' 적용 X: 선언(정의) 이전에 호출 불가

/*
변수종류 변수명 = function(매개변수) {
  - 함수 기능 작성
  - return 반환값; (선택적)
}

>> 익명 함수
*/
// greet2(); // ReferenceError: Cannot access 'greet2' before initialization
console.log('== 함수 표현식 선언 이전 ==');

const greet2 = function () {
  console.log('안녕하세요! (함수 표현식)');
}

greet2();

// 3) 화살표 함수
// : function 키워드 사용 X - 해당 키워드를 화살표(=>)로 대체 (간결한 작성), 함수명 사용 X
// > '호이스팅' 적용 X
// +) 무조건 익명 함수로 작성
//    'this'가 일반 함수와 다르게 바인딩 됨
/*
변수종류 변수명 = (매개변수 나열) => {
  - 함수 기능 작성
  - return 반환값; (선택적) 
}
*/

// greet3(); // ReferenceError: Cannot access 'greet3' before initialization
console.log('== 화살표 함수 선언 이전 ==');

let greet3 = () => {
  console.log('안녕하세요! (화살표 함수)');
}

greet3();

//? cf) 화살표 함수는 매개변수가 1개인 경우 소괄호를
//    , 함수 본문(구현부)이 단일문인 경우 중괄호 + return 키워드 생략 가능
const greet4 = name => console.log(`안녕하세요 ${name}님`);

//! 3. 함수의 인자(argument)
// : 함수 사용을 위해 파라미터로 전달되는 값
// - parameter: 변수 선언
// - argument: 변수 할당

greet4('이승아'); // 안녕하세요 이승아님

//! 4. 함수 호출 방법
// : 함수 생성(선언)
// : 함수 사용(호출) - 함수명(인자값);
// > 인자값은 매개변수가 없을 경우 생략 가능

//! 5. 함수의 스코프(범위, scope)

// 1) 지역 변수 (local)
//  : 중괄호 내의 영역 (함수 내부)

// 2) 전역 변수 (global)
//  : 해당 파일(모듈) 내에서의 영역
//  - 해당 파일 내부에서 어디든지 접근 가능

let username = '이승아';

function lsa() {
  // 지역 변수: 함수 내의 변수(+ 매개변수도 지역 변수)
  let job = 'developer';

  console.log(`${username}'s job is ${job}`);
}

lsa(); // 이승아's job is developer
// console.log(job); // ReferenceError: job is not defined
// >> 지역 변수는 해당 스코프를 벗어나면 사용 불가

/*
  함수 선언 방식에 따른 Best Practice

  - 일반적 상황: 선언문 (function + 함수명 O)
  - 조건부 함수 사용: 함수 표현식 (function + 함수명 선택)
  - 콜백 함수 사용: 화살표 함수 (=> + 함수명 X)
*/