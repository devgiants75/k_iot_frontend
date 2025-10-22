// d_local.js

//! 로컬 스토리지(local storage)
// : 웹 브라우저가 제공하는 저장 공간
// - 사용자의 컴퓨터에 영구적으로 데이터를 저장
// > HTML5 웹 스토리지 사양의 일부 도입으로 '쿠키'의 공간 제한을 보완

//! 1. 로컬 스토리지 데이터 저장
// localStorage.setItem(key, value);
// - 웹 브라우저의 저장 공간에 데이터 저장 (브라우저를 닫아도 유지)

localStorage.setItem('key', 'value');
localStorage.setItem('username', '이승아');

// cf) 로컬 스토리지의 데이터는 문자열만 저장 가능
// : 기본 자료형 또한 저장 가능 >> 문자열로 인식
localStorage.setItem('number', 29);
localStorage.setItem('boolean', false);

// cf) 로컬 스토리지에 객체나 배열 등의 참조 자료형 데이터 저장 시
//     : 문자열 형태로 변환 (JSON.stringfy())
let userInfo = {
  name: '이승아',
  age: 29
}

localStorage.setItem('userInfo', JSON.stringify(userInfo));

//! 로컬 스토리지 데이터 가져오기
// localStorage.getItem(key);
// : 해당 key와 일치한 데이터 반환, 없으면 null 반환

// 1) 기본 자료형
let keyValue = localStorage.getItem('key');
let username = localStorage.getItem('username');
let numberValue = localStorage.getItem('number');
let booleanValue = localStorage.getItem('boolean');

console.log(keyValue);
console.log(username);
console.log(numberValue);
console.log(booleanValue);

// 2) 참조 자료형
let userInfoData = localStorage.getItem('userInfo');
console.log(userInfoData); // {"name":"이승아","age":29}
console.log(JSON.parse(userInfoData)); // {name: '이승아', age: 29}

//? cf) 로컬 스토리지 데이터 반환 시 데이터의 null 값 처리 코드 작성 필수
let noValue = localStorage.getItem('no');
console.log(noValue); // null

// noValue.toLowerCase();
if (noValue) {
  noValue.toUpperCase();
}

//! 로컬 스토리지 데이터 삭제
// : localStorage.removeItem(key);
// - 초기화 localStorage.clear();

localStorage.removeItem('username');
console.log(localStorage.getItem('username')); // null

localStorage.removeItem('hello');

localStorage.clear();