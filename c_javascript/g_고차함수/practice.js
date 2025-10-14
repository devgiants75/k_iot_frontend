// practice.js

//# 배열 메서드 + 콜백 함수 //

// 1번 문제
// 다음 배열을 조건에 따라 작성하고 실행했을 때의 결과를 확인하시오.

const scores = [75, 83, 95, 64, 100, 55, 43];

function passingScores(scores) {
  // Q) 60점이 넘는 점수의 개수와 평균을 하나의 배열로 반환

  // 1) 60점 이상인 점수를 필터링: filter
  const passing = scores.filter(score => score >= 60);

  // 2) 60점 이상인 점수의 개수: .length
  const passingCount = passing.length;

  // 3) 60점 이상인 점수들의 평균: 합을 단일한 값으로 반환 - reduce
  const passingAverage 
    = passing.reduce((acc, score) => acc + score, 0) / passingCount;

  // 4) 각각의 변수값을 하나의 배열로 반환
  return [passingCount, passingAverage];
}

//? 함수 호출
const result = passingScores(scores);
console.log(result); // [ 7, 83.4 ]

// const passingCountValue = result[0];
// const passingAverageValue = result[1];

//! cf) 구조 분해 할당
// : 배열이나 객체의 각 요소를 한 번에 각 변수에 할당
// 변수종류 [변수명1, 변수명2, ...] = [값1, 값2, ...];
// 변수종류 [변수명1, 변수명2, ...] = 배열명;
const [aa, bb, cc] = [1, 2, 3];
console.log(`${aa}, ${bb}, ${cc}`); // 1, 2, 3

// +) 구조 분해 할당에서 좌항의 배열 내 변수는 변수 선언과 같음!
//      >> 구조 분해 할당된 배열 안의 각 요소는 개별적인 변수와 동일
const [passingCountValue, passingAverageValue] = result;

console.log(passingCountValue); // 7
console.log(passingAverageValue); // 83.4

// +) 구조 분해 할당은 변수 선언 + 초기화 

//! 2번 문제
// 주어진 배열을 사용하여 문제를 해결하시오.
const numbers = [1, 2, 3, 4, 5];

// 각 요소에 10을 더하고 홀수값 만을 새로운 배열에 담아 출력
// : 메서드 체이닝
const plusTen = numbers.map(num => num + 10);
const oddValue = plusTen.filter(odd => odd % 2 !== 0);
console.log(plusTen);
console.log(oddValue);

const newNumbers = numbers
  .map(num => num + 10)
  .filter(odd => odd % 2 !== 0);

console.log(newNumbers); // [ 11, 13, 15 ]

//! 3번 문제
// 주어진 배열을 사용하여 문제를 해결하시오.
const words = ['apple', 'monkey', 'banana', 'pig', 'grape', 'elephant'];

const filteredWords = (words, substring) => {
  // 1) 첫 번째 인자: 배열
  // 2) 두 번째 인자: 필터링할 단어
  // >> words(배열)의 각 단어 중 substring(문자열)이 포함된 단어만 필터링하여 반환

  // +) includes() 메서드 활용: 문자열.includes(문자)
  //      >> 문자열 안에 인자로 전달된 문자가 포함되어 있을 경우 true, 그렇지 않으면 false
  //      >> 배열, 문자열 등에서 데이터 인자값이 포함되어있는지를 검사 (boolean 반환)

  return words.filter(word => word.includes(substring));
}

const containA = filteredWords(words, 'a');
console.log(containA); // [ 'apple', 'banana', 'grape', 'elephant' ]