export const tmp = ''; 

//! === useRef ===

//? 1. useRef 훅의 주요 목적은 무엇인가?
// A. 상태를 영구 저장하기 위해
// B. DOM 요소나 값의 변경을 추적하되 렌더링을 유발하지 않기 위해
// C. 전역 상태 관리를 위해
// D. CSS 스타일을 제어하기 위해

//? 2. useRef가 반환하는 객체의 기본 속성 이름은?
// A. .value
// B. .current
// C. .ref
// D. .data

//? 3. useRef의 초기값을 지정하는 방법은?
// A. useRef()에는 인자를 전달할 수 없다
// B. useRef(initialValue)
// C. useRef = initialValue
// D. const {ref} = useRef(initialValue)

//? 4. useRef로 DOM 요소를 참조하는 올바른 방법은?
/*
  function InputFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return <input ref={inputRef} />;
  }
*/
// A. 올바른 코드이다
// B. ref 속성은 문자열만 받을 수 있다
// C. useEffect 내부에서는 ref 사용 불가
// D. useRef는 DOM 요소와 무관하다

//? 5. useRef는 값이 변경되어도 컴포넌트를 다시 렌더링하지 않는다. (O/X)

//? 6. useRef는 렌더 간에 유지되는 "가변 변수" 역할을 한다. (O/X)

//? 7. 아래 코드의 결과로 옳은 것은?
/*
  const countRef = useRef(0);
  countRef.current += 1;
  console.log(countRef.current);
*/
// A. 0
// B. 1
// C. undefined
// D. 에러 발생

//? 8. useRef는 언제 주로 사용되는가?
// A. DOM 접근, 이전 값 저장, 외부 라이브러리 연동 시
// B. 상태 관리 및 재렌더링 최적화 시
// C. API 호출 로직 처리 시
// D. CSS 애니메이션 제어 전용 시

//? 9. useRef로 이전 렌더의 값을 저장할 수 있다. (O/X)

//? 10. useRef는 React 렌더 주기 사이에서도 동일한 객체를 유지한다. (O/X)