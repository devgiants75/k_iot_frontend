// 구조분해할당.js

//! 구조 분해 할당 (다중 할당)
// : 배열과 객체의 값을 한 번에 여러 개의 변수에 할당

//? 구조 분해 할당의 형태

// [식별자, 식별자, ...] = 배열;
// { 속성명, 속성명, ... } = 객체;

// cf) 식별자: 변수를 나열한 형태

let array = [1, 2, 3];
let [a, b] = array;

// let a = 11;
// let b = 22; - 재선언 불가 오류

console.log(a);
console.log(b);

// >> 배열의 크기 같을 필요 X - 넘치는 값은 생략

// 객체 생성
const bookObject = {
  name: 'JS 공부하기',
  price: 18000,
  publisher: '코리아 IT'
}

//? 객체는 배열과 달리 순서 상관 X
// : 각각 연결된 속성명으로 값이 자동 전달
const { publisher, price, name, author } = bookObject;

console.log(publisher, price, name, author); // 코리아 IT 18000 JS 공부하기 undefined

// cf) 속성명을 변수로 지정하지 않고 새로운 식별자 사용
const { aaa=name, bbb=price } = bookObject;
console.log(aaa, bbb); // JS 공부하기 18000