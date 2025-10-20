// obj02.js

//# 3. JSON 객체
// : JavaScript Object Notation (자바스크립트 객체 표기법)

//? JSON 구조
// : 기본 데이터 타입의 문자, 숫자, 불리언, 배열, 객체 등 모두 포함
// - 배열과 객체를 활용하여 자료의 형태를 구조화

// 'key-value'(키: 값)의 쌍으로 데이터를 구성
// : 순수한 텍스트 형식의 자료 - 키를 항상 ""따옴표로 작성
// : 함수 사용 불가

// cf) 객체 정의
let data = [
  {
    name: '이승아',
    age: 30,
    job: 'developer',
    hobby: {
      first: 'exercise',
      second: 'reading'
    },
    lecture: ['java', 'python', 'dbms']
  },
  {
    name: '이도경',
    age: 30,
    job: 'employee',
    hobby: {
      first: 'health',
      second: 'baseball'
    }
  }
];

//! JSON.stringfy(자바스크립트 객체);
// : JS 객체를 JSON 문자열로 변환
// - 데이터에 직접 적용 X, JSON 객체에서 호출
console.log('== 원본 객체 ==');
console.log(data);

console.log('== JSON으로 변환 ==');
console.log(JSON.stringify(data));
// >> JSON은 데이터를 주고받기 편하게 일관화하는 방법 최대한 공백 없이 사용

// cf) stringify() 메서드 인자 (가독성 옵션)
// : (JSON으로 변환할 객체 데이터, 속성 추출, 들여쓰기 N칸)

// - 속성 추출: 원하는 객체 속성만 가져오기 (비워둘 경우 null 지정)
console.log('name, age 속성 추출 데이터');
console.log(JSON.stringify(data, ['name', 'age']));

console.log('들여쓰기 설정 JSON 데이터');
console.log(JSON.stringify(data, null, 2)); // space 칸 기준 들여쓰기 설정 (2 권장)

//! 2) JSON.parse(JSON 데이터)
// : JSON 문자열을 JS 객체로 변환
let jsonData = JSON.stringify(data); 
console.log(jsonData);

console.log('자바스크립트 객체 출력');
console.log(JSON.parse(jsonData));