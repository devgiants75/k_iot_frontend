// basic.ts

// let num: number = 10;
//! TS는 파일 단위의 스코프(범위, 영역)이 생성되지 X
// - node_modules가 존재하는 프로젝트 최상단(전체) 범위의 스코프가 전역 스코프로 생성

//? 스코프 생성 방법
// 1) 중괄호 사용법: 직관적인 스코프 생성
{
  let num = 10;
}

{
  let num = 20;
}

// 2) export 키워드 사용법
// : export 키워드 사용 시 ts 파일이 자동 모듈로 인식
// - 외부 전역 스코프와의 충돌 방지
export const tmp = ""; // tmp: temporary(일시적인, 임시의)
let num = 10;
console.log(num);

//! TS와 JS의 차이
let message = "hello"; // 변수에 담긴 데이터의 타입을 자동 인식

console.log(message.toUpperCase());

// message();
// This expression is not callable. Type 'String' has no call signatures.

let message2 = () => {
  console.log("hello");
};

message2();

// 코드 전체 선택: ctrl + a
// 포맷터 진행: ctrl + k + f