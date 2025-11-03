export const tmp = '';

//! === 이벤트 핸들러 (Event Handler) ===

//? 1️. React에서 이벤트 핸들러 이름은 보통 어떤 형태인가?
// A. camelCase
// B. snake_case
// C. kebab-case
// D. PascalCase

//? 2. 클릭 이벤트를 처리할 때 올바른 문법은?
/*
  <button onClick={handleClick}>Click</button>
*/
// A. 올바름
// B. 오류 발생

//? 3. 이벤트 핸들러를 JSX 안에서 직접 호출하면?
// A. 즉시 실행됨
// B. 클릭할 때 실행됨
// C. 오류 발생
// D. 반환값만 실행됨

//? TypeScript에서 이벤트 핸들러의 타입 예시
/*
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
*/
// A. 올바름
// B. 잘못된 타입

//? 5. onClick은 React에서 제공하는 **합성 이벤트(SyntheticEvent)**이다. (O/X)

//? 6. 이벤트 핸들러에서 상태를 바꾸는 함수는 보통?
// A. setState
// B. useState의 setter
// C. changeState
// D. updateEvent

//? 7. 다음 코드에서 문제가 되는 부분은?
/*
  <button onClick={handleClick()}>Click</button>
*/
// A. handleClick이 즉시 실행됨
// B. 이벤트 타입 오류
// C. 문법 오류
// D. JSX 구조 오류

//? 8. 이벤트 핸들러를 props로 전달할 수 있다. (O/X)

//? 9. 이벤트 객체는 SyntheticEvent로 래핑되어 있다. (O/X)

//? 10. React 이벤트 이름은 HTML의 이벤트 이름과 완전히 동일하다. (O/X)