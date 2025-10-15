//? == 문제 1 ==
//# 1) 객체 생성
// : person 객체 생성 - name(문자열), age(숫자), isStudent(불리언) 속성 추가

// cf) 불리언 타입 변수 명명 규칙
//    : true(참), false(거짓) - 2가지의 값만을 가짐
//    >> is, has와 같이 동사와 명사를 결합한 의문문 변수명을 주로 사용
//    EX) is + 명사: isStudent(학생이니?) / isAnimal(동물이니?)
//        has + 명/동사: hasEatLunch(점심먹었니?) / hasCold(감기걸렸니?)

let person = { // 객체 리터럴 방식: {} 중괄호 사용

  // 속성(변수): '키: 값'의 쌍으로 정의
  name: '이승아',
  age: 50,
  isStudent: false
}

// 객체의 속성값에 접근
// 1) 객체명.속성명;
// 2) 객체명[속성명];
console.log(person.age);
console.log(person["name"]);

//# 2) 배열 생성
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가 (3가지 이상)
// - 두 번째 과일을 콘솔에 출력
let fruits = ['banana', 'apple', 'mango'];
console.log(fruits[1]); // 배열 요소 접근: 배열명[인덱스번호]

//# 3) 함수 생성
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 add 함수 작성
// >> 매개 변수 O, 반환값 O

// function add(a, b) {
//   return a + b;
// }

// let add = function(a, b) {
//   return a + b;
// }

let add = (a, b) => a + b;

console.log(add(3, 5)); // 8

//? 문제 2
console.log('=== 문제 2 ===');

//& 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용

//* for in 반복문
// : 객체와 배열의 순회를 가볍게 처리하는 반복문 (for문의 객체, 배열 순회 - 인덱스번호가 필요 X)

let array = [1, 2, 3, 4, 5];

// array 배열 안을(in) 순회하면서 각 요소의 인덱스를 할당
// : 배열의 요소에 접근하기 위해서 [] 대괄호 연산자를 사용
for (let num in array) {
  console.log(array[num]);
}

// 객체
let object = {};
for (let key in object) {
  console.log(`${key}: ${object[key]}`);
}

// cf) for in 반복문 사용 시 
// : 객체의 값 접근의 경우 '대괄호 표기법을 사용'
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//& 2. 배열 메서드(배열 내장 함수) 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력

// cf) 배열 메서드 & 콜백 함수(함수에 인자로 전달하는 함수)
// - forEach: 반환 X / 전체 요소에 동일한 기능을 적용

// - map: 새로운 배열을 반환 / 전체 요소에 동일한 기능을 적용

// - filter: 새로운 배열을 반환 / 해당 조건식을 참으로 통과하는 요소만 새로운 배열로 반환

// +) 대문자 변환: 문자열.toUpperCase()

// 배열 메서드에서 쓰이는 콜백함수의 인자 (value, index, array)

let upperCaseFruits = fruits.map(function (value, index, array) { 
  return value.toUpperCase();
});

// cf) 배열메서드의 콜백함수는 주로 화살표 함수 형태
fruits.map(value => value.toUpperCase());

//& 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArrays(arr1, arr2) {
  let result = arr1.map((element, index) => {
    return element + arr2[index]; // 동일한 인덱스 번호를 가진 요소끼리 더해져서 반환
  });

  return result;
}

console.log(combineArrays(arr1, arr2)); // 실제 데이터가 담긴 배열 변수 - [ 5, 7, 9 ]

//? 문제 3
//& 1. 객체 깊은 복사
// : person 객체를 '깊은 복사'하는 함수를 작성

// +) 객체의 깊은 복사 JSON 자료형을 사용
// >> JSON.stringfy(객체데이터)
// >> JSON.parse(JSON데이터)

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let personCopy = deepCopy(person);

personCopy.name = '이도경';
console.log(personCopy); // { name: '이도경', age: 50, isStudent: false }

console.log(person); // { name: '이승아', age: 50, isStudent: false }

//& 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링(filter)하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환(map)하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];

// 성인 사용자만 필터링 된 데이터 //# filter
// const users = [
//   { name: "John", age: 25 },
//   { name: "Doe", age: 18 }
// ];

// 성인 사용자의 이름만 새로운 배열로 저장 //# map
// const users = ['John', 'Doe'];

function adultUserNames(users) {
  return users
    .filter(user => user.age >= 18)
    .map(user => user.name);
}

console.log(adultUserNames(users)); // [ 'John', 'Doe' ]