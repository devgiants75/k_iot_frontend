// type07.ts

//! == 타입스크립트 함수 타입 정의 ==

//? 함수의 선언과 호출
// : 매개변수 & 반환값 지정 가능
// +) 매개변수 타입은 필수 지정!

// function 함수명(매개변수: 매개변수타입): 반환타입 {}
function greet(name: string): string {
  return `Hello ${name}`
}

// +) 반환값이 없거나 return 키워드 생략: void 타입 지정 가능
// +) 함수에 타입 별칭을 사용하는 경우: 화살표 함수 체계 사용

type ArrowFuncType = (name: string) => string;

const arrowFunc: ArrowFuncType = (name) => {
  return `Hi ${name}`;
}

console.log(arrowFunc('홍기수'));
console.log(arrowFunc('이상은'));

//? 선택적 매개변수 & 기본 매개변수
// 1) 선택적 매개변수
// : 함수 호출 시 인자 전달 생략 가능
// - 변수명 뒤에 ? 작성

// 2) 기본 매개변수
// : 기본값을 할당 (매개변수명 = 기본값)
// - 함수 호출 시 생략하는 경우 기본값으로 자동 할당

function select(name?: string, nickname: string = '개구리') {
  if (name) {
    console.log(`${nickname} is ${name}`);
  } else {
    console.log(`${nickname} is guest`);
  }
}

select(); // 개구리 is guest
select('이승아'); // 개구리 is 이승아 (name)
select('강사'); // 개구리 is 강사 (name)

// cf) 선택적 매개변수와 기본 매개변수 혼합 사용 시
// 1. 선택적 매개변수는 반드시!!!!! 필수 매개변수(인자로 전달하는 값) 뒤에 작성!!!!!
// 2. 기본 매개변수는 '필수 & 선택'적 매개변수의 양쪽 어디든 작성 가능
// 3. 선택적 매개변수가 앞서는 경우 생략하려면 반드시 undefined값 전달
select(undefined, '강사'); // 강사 is guest
select('이도경', '미어캣'); // 미어캣 is 이도경

//? Rest 나머지 매개변수
// : 함수에 전달하는 여러 개의 매개변수를 그룹화하여 배열로 전달하는 방법
// - ...연산자를 사용하여 매개변수명 앞에 첨부
function sum(a: number, b: number, ...c: number[]) {
  return c.reduce((c1, c2) => c1 + c2, 0);

  // c1: 축적값
  // c2: 현재값
  // >> 축적값과 현재값을 더하여 다시 축적값(c1)에 전달
  //    === c1 += c2
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 52
console.log(sum(1, 2)); // 0
console.log(sum(1, 2, 10, 20, 30)); // 60

// +) Rest 매개변수 사용 시: 항상 매개변수 리스트의 마지막에 위치! (+ 타입 명시 배열)