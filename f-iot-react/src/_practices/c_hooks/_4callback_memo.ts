export const tmp = '';

//! === useCallback & useMemo ===

//? 1. useMemo의 주요 목적은 무엇인가?
// A. 메모리에 상태를 저장하기 위해
// B. 계산 비용이 큰 값을 메모이제이션(캐싱)하기 위해
// C. DOM 조작을 단순화하기 위해
// D. 컴포넌트를 강제로 리렌더링하기 위해

//? 2. useCallback의 주요 목적은 무엇인가?
// A. 함수 객체를 메모이제이션하여 불필요한 렌더링을 방지하기 위해
// B. 상태값을 즉시 변경하기 위해
// C. 컴포넌트 스타일을 저장하기 위해
// D. 외부 API를 자동 호출하기 위해

//? 3. useMemo와 useCallback의 공통점은?
// A. 둘 다 값을 즉시 반환한다
// B. 둘 다 의존성 배열(dependency array)에 따라 메모이제이션을 수행한다
// C. 둘 다 JSX를 반환한다
// D. 렌더링을 지연시킨다

//? 4. useMemo가 반환하는 것은?
// A. 메모된 함수
// B. 메모된 값
// C. 상태 업데이트 함수
// D. Promise 객체

//? 5. useCallback이 반환하는 것은?
// A. 메모된 함수
// B. 메모된 값
// C. 상태 업데이트 함수
// D. 이벤트 객체

//? 6. 다음 코드의 문제점은?
/*
  const memoValue = useMemo(() => {
    return count * 2;
  });
*/
// A. 의존성 배열이 빠져 있어 매 렌더링마다 다시 계산됨
// B. useMemo는 인자를 받을 수 없음
// C. return 문을 쓸 수 없음
// D. count는 사용할 수 없음

//? 7. 다음 코드에서 useCallback의 효과는?
/*
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
*/
// A. 함수가 매 렌더링마다 새로 생성된다
// B. 함수가 한 번만 생성되어 재사용된다
// C. 실행될 때마다 의존성이 변경된다
// D. 에러 발생

//? 8. useCallback과 useMemo의 차이점으로 올바른 것은?
// A. useMemo는 “값”을 메모이제이션, useCallback은 “함수”를 메모이제이션
// B. useCallback은 내부적으로 useMemo를 사용한다
// C. useMemo는 DOM 접근용이다
// D. 둘 다 완전히 동일한 동작을 한다

//? 9. 아래 코드의 출력 결과로 옳은 것은??
/*
  const getValue = useCallback(() => 10, []);
  console.log(getValue());
*/
// A. 10
// B. undefined
// C. 함수 자체가 출력됨
// D. 에러 발생

//? 10. useMemo와 useCallback은 모두 성능 최적화를 위해 사용된다. (O/X)