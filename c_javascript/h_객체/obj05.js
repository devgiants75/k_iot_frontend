// obj05.js

//# === 객체의 복사 === //

// cf) 원시 타입(기본 자료형): 값을 메모리에 바로 저장

//! 참조 타입(참조 자료형)
// : 주소값 저장
// - 메모리에 저장된 객체의 주소를 저장

//? 객체의 복사
let computer1 = {
  name: '삼성'
}

// computer1의 주소값이 복사
// : 같은 메모리 주소를 가리킴 (값을 공유)
// >> 얕은 복사
let computer2 = computer1;

computer1.name = '애플';
console.log(computer2); // { name: '애플' }

function changeName(computer) {
  computer.name = '엘지';
}

changeName(computer1);
console.log(computer2); // { name: '엘지' }

//! 객체의 깊은 복사
// : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
// - 원본 객체와 복사본이 서로 독립적 (주소값이 다름)

//? JSON (JavaScript Object Notation)
// : 자바스크립트 객체 표기

// 1) JSON.stringfy(obj)
// : obj 객체를 전달받아 JSON 문자열화(문자열로 변환)

// 2) JSON.parse(json)
// : json 문자열을 전달받아 parse(분석하여) JS 객체로 변환
// > 새로운 메모리 위치에 할당

let book1 = {
  title: '백설공주',
  author: '이승아',
  publishYear: 2025
}

let jsonString = JSON.stringify(book1);
console.log(jsonString); // {"title":"백설공주","author":"이승아","publishYear":2025}

// JS 객체의 키값은 "" 따옴표 사용을 생략!
// JSON 문자열의 키값은 반드시 "" 사용 필수!

let book2 = JSON.parse(jsonString);
console.log(book2); // { title: '백설공주', author: '이승아', publishYear: 2025 }

book2.title = '신데렐라';
book2.author = '이도경';

console.log(book1); // { title: '백설공주', author: '이승아', publishYear: 2025 }
console.log(book2); // { title: '신데렐라', author: '이도경', publishYear: 2025 }

//? +) 객체 속성 확인 연산자

// 1) in 연산자
// : 속성이 객체에 존재하는지 확인
// - boolean 타입으로 존재 유무를 반환
console.log('title' in book1); // true
console.log('publisher' in book1); // false
console.log('author' in book2); // author
console.log('name' in book2); // false

// 2) delete 연산자
// : 해당 속성을 가진 '키': '값'의 쌍을 삭제
// delete 객체명.키명;
delete book1.title;
console.log('title' in book1); // false