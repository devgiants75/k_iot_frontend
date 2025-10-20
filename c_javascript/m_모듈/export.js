// export.js
// : 수출하다

//! export 문
// : 모듈에서 다른 파일로 함수, 변수, 클래스 등을 내보낼 때
// >> 이름 붙여 내보내기, 기본 내보내기 

//? 1) 이름 붙여 내보내기
//     : export된 특정 멤버 가져오기
// : 하나의 모듈에서 여러 항목 내보내기가 가능
// - 각 항목이 고유한 이름으로 참조
// - export 키워드 사용

// 변수
export const PI = 3.14159;
const name = '이승아';

// 함수
export function add(x, y) {
  return x + y;
}

// : 내보낼 모듈 앞에 export 키워드 사용
// [사용하는 파일에서]
// import { 모듈명 as 식별자, 모듈명 as 식별자 ,,, } from '모듈명(파일명)';

// 2) 기본 내보내기
// : 모듈 당 하나의 항목만 기본 내보내기 가능
// - 주로 한 모듈에 하나의 주요 기능이 있는 경우 적합
// - export default 키워드 사용

export default function multiply(x, y) {
  return x * y;
}

// export default function error() {
//   console.log('여러 개의 export default');
// }
// >> SyntaxError: Duplicate export of 'default'

// : 내보낼 모듈 앞에 export default 키워드 사용
// [사용하는 파일에서]
// import 모듈명 from '파일명.확장자';