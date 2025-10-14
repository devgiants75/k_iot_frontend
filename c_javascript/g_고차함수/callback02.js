// callback02.js

//# === 콜백 함수를 활용하는 JS의 '내장 함수' === //

//! '배열'이 가지는 콜백 함수를 활용
// : 배열 자체가 데이터 타입
// - 배열과 함께 사용되는 콜백 함수이기 때문에 '메서드의 형태'

// cf) 함수 VS 메서드
// - 함수는 독립적인 기능을 수행
// - 메서드는 특정 구조(클래스)에 소속된 함수
// > Object.속성 / Object.메서드()
//      : 객체 내부의 기능과 동작을 사용

//! '배열'의 콜백함수 형태
// : 배열.메서드(콜백 함수)
// - 콜백 함수를 가지는 배열 메서드는 공통적으로 '배열을 순회'
// - 콜백 함수는 3가지 선언 형식 모두 사용 가능

//! '배열'의 콜백함수의 '인자값'
//? function callback(value, index, array) {}

// EX) [4, 3, 2, 5, 1]
// - value: 배열에서 순회되는 각 요소
// - index: 순회되는 각 요소의 인덱스 번호
// - array: 배열 그 자체 

// >> 콜백 함수의 인자값은 필수 X (주로 value만 사용)
//      : 사용하지 않는 인자값은 생략 가능

//? function callback(value) {}
//? function callback(value, index) {}
//? function callback(, index, array) {} - 순서가 중요! (비워지는 인자값의 공간은 남겨둠!)
//? function callback(,, array);

//! '배열'의 콜백 함수 메서드
// : 각 요소에 대해 동일한 함수 실행
// : 배열 내부의 요소를 매개변수로 사용하는 콜백 함수를 호출
const numbers = [23, 41, 19, 7, 36];
const anyArray = [123, '123', true, [1, 2, 3]];

// === forEach() === //
// - 사용 값 반환 X
console.log('=== forEach() ===');
// numbers.forEach(콜백 함수);

numbers.forEach(function(value, index, array) {
  // 모든 요소에 동일하게 적용 기능
  console.log(`${index + 1}번째 요소: ${value}`);
});
// 1번째 요소: 23
// 2번째 요소: 41
// 3번째 요소: 19
// 4번째 요소: 7
// 5번째 요소: 36

anyArray.forEach(function(value, index, array) {});

// === map() === //
// - 각 요소에 대해 동일한 함수 실행 후 '새로운 배열을 생성하여 반환'
console.log('=== map() ===');
console.log(numbers); // [ 23, 41, 19, 7, 36 ]

const newNumbers = numbers.map(function callback(value) {
  let square = value * value;
  return square;
});

// const arrowNumbers = numbers.map((value, index, array) => {
//   let square = value * value;
//   return square;
// });

const arrowNumbers = numbers.map(value => value * value);

console.log(newNumbers); // [ 529, 1681, 361, 49, 1296 ]
console.log(arrowNumbers); // [ 529, 1681, 361, 49, 1296 ]

// === filter() === //
// - 각 요소에 대해 동일한 함수 실행 후 
//    , '콜백 함수의 리턴값이 true인 요소만 모아서 새로운 배열을 생성하여 반환'
console.log('=== filter() ===');

const basicArray = [0, 1, 2, 3, 4, 5];

const evenNumbers = basicArray.filter(v => v % 2 === 0); 
// value, index, array의 순서만 보장되면 콜백 함수의 인자명은 변경 가능

// basicArray.filter(function(value) {
//   return value % 2 === 0;
// });

console.log(`원래 배열: ${basicArray} / 짝수 배열: ${evenNumbers}`);
// 원래 배열: 0,1,2,3,4,5 / 짝수 배열: 0,2,4

//! === 배열을 활용한 콜백 함수 예제 === //
let cars = ['audi', 'bmw', 'volvo', 'hyundai'];
cars.forEach(c => console.log(c));

//? 콜백 함수의 매개변수명 지정
// : 의미론적 변수명 지정을 권장!
const tasktags = ['오늘까지 끝내기', '중요한 일', '중요도가 낮은 일'];
tasktags.forEach(tasktag => console.log(tasktag));
tasktags.forEach(tt => console.log(tt));

// 1) 전체 배열의 요소를 대문자(영문자)로 변환
// : 문자열.toUpperCase();
let carsUpperCase = cars.map(function (car) {
  return car.toUpperCase();
});

console.log(carsUpperCase); // [ 'AUDI', 'BMW', 'VOLVO', 'HYUNDAI' ]

// 2) 전체 배열 요소 중 문자열 길이가 4보다 큰 요소만 반환
// : 문자열.length
let longNameCars = cars.filter(car => car.length > 4);

cars.filter(function(car) {
  let isCarLengthBiggerThanFour = car.length > 4; // boolean 값 
  return isCarLengthBiggerThanFour;
  // 함수 실행 후 true를 반환한 요소 만을 새로운 배열에 담아 반환
});

console.log(longNameCars); // [ 'volvo', 'hyundai' ]

//? 메서드 체이닝
// : 메서드를 연속적으로 호출하는 프로그래밍 패턴(기법)
// - 어떤 메서드(기능)이 반환하는 값을 기반으로 또 다른 메서드를 줄줄이 사용하는 것

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1) numbersArray 에서 짝수만 선택 - filter
// 2) 해당 짝수들의 값을 제곱 - map
// 3) 해당 제곱값들을 콘솔에 출력 - forEach

let a = numbersArray.filter(value => value % 2 === 0);
console.log(a); // [ 0, 2, 4, 6, 8 ]

let b = a.map(value => value * value);
console.log(b); // [ 0, 4, 16, 36, 64 ]

b.forEach(value => console.log(value));
// 0
// 4
// 16
// 36
// 64

numbersArray
  .filter(value => value % 2 === 0)
  .map(value => value * value)
  .forEach(value => console.log(value));