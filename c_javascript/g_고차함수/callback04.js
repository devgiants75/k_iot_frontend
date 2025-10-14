// callback04.js

//# === 콜백 함수를 활용하는 JS의 '내장 함수' === //

//! 타이머 함수 (비동기 콜백)
// : 특정 시간 이후에 함수를 실행 OR 일정 간격으로 함수를 반복 실행 가능

//? cf) 비동기
// : 작업이 끝날 때까지 기다리지 않고 다음 코드를 바로 실행하는 방식
// > "콜백 함수"는 다른 함수의 인자로 전달되어, 특정 시점에 실행되는 함수
// > "비동기 콜백 함수"는 비동기 작업이 완료된 후 실행되는 콜백 함수
//      : 나중에 실행될 일을 미리 등록해두는 것!

// 1) setTimeout(콜백함수, 시간);
// - 콜백 함수: 지정된 시간 이후에 '단 한 번만' 실행될 함수
// - 시간: 밀리초 단위 (1s === 1000ms)

function runlater(name = '이승아') {
  console.log(`Hello, ${name}^^`);
}

runlater(); // Hello, 이승아^^ - 동기 프로그래밍

setTimeout(runlater, 2000); // Hello, 이승아^^

// setTimeout(runlater('이도경'), 2000); 
// >> The "callback" argument must be of type function. Received undefined
// >> 콜백 함수의 인자는 undefined(비워져 있음)여야만 한다!

// cf) 콜백 함수의 인자 전달 방법
// : 세 번째 인자부터 나열되는 값이 함수의 매개변수로 전달
setTimeout(runlater, 3000, '이도경'); // Hello, 이도경^^

// cf) 함수 호출: 함수명(전달할 인자 나열);
// >> 호출부 () 작성 시 코드를 읽는 즉시 함수 실행!
// setTimeout(runlater(), 2000, '조승범');

function manyParam(name, age, job) {
  console.log(`${name} is ${age} years old and is ${job}`);
}

setTimeout(manyParam, 100, '이승아', 29, 'developer'); // 이승아 is 29 years old and is developer

setTimeout(() => console.log('3초 뒤 실행'), 3000); // 3초 뒤 실행
// cf) 화살표 함수에서 소괄호 생략은 매개 변수가 1개일 때만 가능
//      >> 매개변수가 없는 경우에는 반드시 소괄호 작성!

//! 타이머 취소 함수: clearTimeout(타이머 ID);
// : 등록된 타이머를 취소할 때 사용
// - setTimeout으로 예약된 코드 실행을 중단하거나 무효화할 때 사용

// cf) 타이머 ID는 타이머 함수 호출 시 반환
const timeId = setTimeout(() => console.log('타이머 ID 확인용'), 5000);
console.log(timeId);

clearTimeout(timeId);

//! setInterval(콜백 함수, 시간)
// : '지정된 시간 간격 마다' 함수를 반복해서 실행
// >> 사용법은 setTimeout과 유사

let count = 1;

let id = setInterval(() => {
  console.log(`3초 마다 실행됩니다. ${count}번째`);
  count++;
}, 3000); // 3초 마다 실행

setTimeout(() => {
  console.log('타이머를 종료합니다.');
  clearInterval(id);
}, 15000);

// 터미널 종료: ctrl + c