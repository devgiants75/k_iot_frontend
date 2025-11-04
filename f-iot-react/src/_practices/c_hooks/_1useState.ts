export const tmp = '';

//! === useState ===

//? 1. useState 훅의 주요 목적은 무엇인가?
// A. 컴포넌트의 스타일을 변경하기 위해
// B. 컴포넌트의 상태(state)를 관리하기 위해
// C. DOM 요소를 직접 조작하기 위해
// D. API 호출을 수행하기 위해

//? 2. useState는 어디에서만 호출할 수 있는가?
// A. 일반 함수 내부
// B. 클래스 메서드 내부
// C. React 함수형 컴포넌트 또는 커스텀 훅 내부
// D. JSX 블록 내부

//? 3. useState의 반환값 형태는?
// A. 단일 값
// B. [상태값, 상태변경함수] 배열
// C. 객체 {state, setState}
// D. Promise 객체

//? 4. 다음 중 useState의 올바른 사용 예시는?
/*
  const [count, setCount] = useState(0);
*/
// A. 올바름
// B. useState는 인자를 받을 수 없음
// C. 배열 구조분해를 사용할 수 없음
// D. setCount는 예약어라 사용할 수 없음

//? 5. useState로 관리되는 값이 변경되면 어떤 일이 일어나는가?
// A. DOM이 직접 갱신됨
// B. 해당 컴포넌트가 다시 렌더링됨
// C. 전역 상태가 초기화됨
// D. 아무 일도 일어나지 않음

//? 6. 초기 상태를 함수로 전달할 수 있다. (O/X)

//? 7. useState로 관리하는 상태는 불변성을 유지해야 한다. (O/X)

//? 8. 아래 코드의 실행 결과로 옳은 것은?
/*
  const [count, setCount] = useState(0);
  setCount(count + 1);
  setCount(count + 1);
*/
// A. count는 2가 된다.
// B. count는 1이 된다.
// C. count는 0이 된다.
// D. 에러가 발생한다.

//? 9. useState로 객체 상태를 관리할 때 올바른 패턴은?
/*
  const [user, setUser] = useState({ name: 'Tom', age: 20 });
  setUser({ ...user, age: 21 });
*/
// A. 기존 상태를 복사 후 변경하는 방식이 맞다
// B. 객체는 직접 수정해야 한다
// C. setUser는 숫자만 받는다
// D. ... 연산자는 JSX에서만 사용 가능하다

//? 10. useState의 상태 업데이트 함수(setState)는 비동기적으로 동작할 수 있다. (O/X)
