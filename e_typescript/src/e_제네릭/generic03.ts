// generic03.ts

//! 유니온 타입과 제네릭

// cf) 유니온 타입(OR, |)
// : 여러 타입 중 하나가 될 수 있는 값을 의미

//? 유니온 타입을 제네릭 타입 변수에 활용
// : extends 키워드를 사용하여 확장

type StringOrNumber = string | number;

function unionGeneric<T extends StringOrNumber>(value: T) {
  // T 타입 변수에는 문자열 또는 숫자형 자료형 사용

  if (typeof value === 'string') {
    return value.toLowerCase();
  }

  return value; // 문자가 아닌 자료형(숫자형) 반환
}

const result1 = unionGeneric('sTrInG');
const result2 = unionGeneric(1000);

console.log(result1, result2); // string 1000

//! 제네릭 유틸리티 타입
// : 타입스크립트에 내장된 제네릭 도구
// - 기존 타입을 변형하거나 조작하는데 사용

//@ 1) Partial(부분적인, 선택적인)
// : 모든 속성을 "선택적"으로 바꿔주는 타입
interface User {
  name: string;
  age: number;
}

// interface UpdatedUser {
//   name?: string;
//   age?: number;
// }

type ObjectSignature = {
  [key: number]: User; // 인덱스 시그니처(서명)
}

const users: ObjectSignature = {
  1: {
    name: '김태양',
    age: 20
  },
  2: {
    name: '권지애',
    age: 20
  }
}

//? 실전 예시) 사용자 정보 수정 함수
// : id값을 사용하여 해당 데이터의 name 또는 age값을 수정
function UpdateUser(id: number, changes: Partial<User>) {
  const user = users[id];

  if (!user) {
    console.log('해당 id의 사용자는 없습니다.');
    return;
  }

  // changes 매개변수: name과 age 속성 모두 선택적 프로퍼티
  // 1) name만 있는 경우: { 기존의name, 기존의age, 변경될name } >> changes의 name값으로 수정
  // 2) age만 있는 경우: { 기존의name, 기존의age, 변경될age } >> changes의 age값으로 수정
  // 3) 둘 다 있는 경우: { 기존의name, 기존의age, 변경될name, 변경될age } >> 모든 값이 changes로 수정
  // 4) 둘 다 없는 경우: 수정 X
  users[id] = { ...user, ...changes };
}

UpdateUser(1, {name: '정은혜'});
console.log(users[1]); // { name: '정은혜', age: 20 }
UpdateUser(2, { name: '김지선'});
console.log(users[2]); // { name: '김지선', age: 20 }

UpdateUser(1, {age: 25});
UpdateUser(2, {age: 15});
console.log(users[1], users[2]); // { name: '정은혜', age: 25 } { name: '김지선', age: 15 }

UpdateUser(1, {});
console.log(users[1]); // { name: '정은혜', age: 25 }

//@ 2) Readonly
// : 모든 속성을 읽기 전용으로 변경 (상수)
// - Readonly<T>

interface Person {
  name: string;
  age: number;
}

let user: Readonly<Person> = {
  name: '안미향',
  age: 25
}

// user.name = '김세훈';
// user.age = 30;
// : 객체 자체가 변수일지라도 내부 속성들이 readonly 상수처럼 취급
console.log(user.name); // 안미향
console.log(user.age); // 25

//@ 3) Omit(생략하다)
// : 특정 속성을 제거한 타입을 반환
// - Omit<T, K>
// - T타입에서 K속성을 제거

interface Employee {
  id: number; // 사원번호
  name: string;
  age: number;

  position: string; // 직급
  address: string;
  phone: string;
}

// 인사부(모든 데이터 필요), 회계부(주소 알 필요 X), 총무부(주소, 전화번호 알 필요 X)
interface EmployeeNotAddress {}
interface EmployeeNotAddressAndPhone {}

type EmployeeForAccount = Omit<Employee, 'address'>;
type EmployeeForGeneral = Omit<Employee, 'address' | 'phone'>;
// >> Omit의 두 번째 인자는 유니온 타입 사용 가능

const salaryA: EmployeeForAccount = {
  id: 1,
  name: '이승아',
  age: 30,
  position: '교육부',
  phone: '010-1111-2222'
}

const generalA: EmployeeForGeneral = {
  id: 1,
  name: '이승아',
  age: 30,
  position: '교육부'
}