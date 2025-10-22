// exception01.js

//# == 자바스크립트 예외 ==

//? cf) 오류(Error, 에러)
// : 부정확하거나 유효하지 않은 동작
// - 시스템 수준의 심각한 문제

//! 1. 예외(Exception)란?
// : 런타임 중에서 발생할 수 있는 예측 가능한 상황에 대한 대응
// - 발생하더라도 정상적인 실행을 유지할 수 있도록 처리 가능한 오류

//! 2. 예외의 종류
//? 1) 구문 오류
// : 프로그램 실행 전에 발생
// - 코드 작성 시 문법이 언어에서 정의된 규칙을 따르지 않을 때 발생

console.log('== 구문 오류 예제 ==');
// console.log('프로그램이 시작되었습니다.'; // ')' expected.
// if() {} // Expression expected.

//? 2) 런타임 오류
// : 프로그램 실행 중 발생 (Node.js 환경 OR 브라우저 환경)
// - 예측 가능한 비정상적인 조건 또는 예외적인 사건을 의미
// - 코드가 순차적으로 실행되다가 오류 위치에서 실행 중단

console.log('== 런타임 오류 예제 ==');

// HTML에 존재하지 않는 요소를 불러오는 경우
// : null 값이 반환
const h1 = document.querySelector('h1');

// +) null 값을 연산하거나 null 값에 대한 접근을 하는 경우 런타임 오류 발생
// h1.textContent = '없는 h1 태그에 내용 추가하기!';
// >> TypeError: Cannot set properties of null

// console.rog('log를 rog로 잘못 입력하였습니다.');
// >> 오타 수정만으로 해결 가능한 런타임 오류도 많음 

// cf) JS에서는 SyntaxError로 출력되는 오류 이외의 
//      , 모든 오류가 예외(런타임 오류)로 분류
// >> TypeError, ReferenceError, RangeError

//! 예외 처리 방법

// 1) 기본 예외 처리: 조건문 사용 - 권장 X
document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');

  if (h1) {
    h1.textContent = '안녕하세요';
  } else {
    console.log('h1 태그가 존재하지 않습니다.');
    console.error('h1 태그가 존재하지 않습니다.');
  }
  console.log('다음 로직');
});

// 2) 고급 예외 처리: try-catch 블록 (+ finlly)

/*
  try {
    예외 발생 가능성 로직
    ...
  } catch (e, exception, error) {
    예외 발생 시 로직
  } finally {
    무조건 실행 (선택)
  }

  ? try-catch 블록 (둘 중 하나를 생략할 수 없음)
*/

function randomException() {
  if (Math.random() < 0.5) {
    // 50% 확률로 조건문 실행
    throw new Error('무언가 잘못되었습니다.');
  }
  return '성공적으로 실행되었습니다.';
}

console.log('---------------');

try {
  const result = randomException();

  console.log(result);
  console.log('try 구문의 마지막 줄');
} catch (e) {
  console.log('catch 구문');

  //! catch 블록의 e객체
  // : Error 객체의 인스턴스이며
  //    , 주로 e, err, error, exception 등으로 쓰임
  // - name 속성: 에러의 종류를 문자열로 반환
  // - message 사람이 읽을 수 있는 형태의 에러 내용이 담김
  // - stack: 에러가 발생한 지점의 호출 스택을 문자열로 반환
  console.log(e.message);
} finally {
  console.log('언제나 실행');
}

console.log('---------------');