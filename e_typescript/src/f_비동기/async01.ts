// async01.ts

//! 1. 동기 프로그래밍
// : 코드가 순차적으로 실행
// - 코드 흐름 예측 용이

//? 장단점
// 장점) 간단성, 명확성, 디버깅 용이
// 단점) 응답성 저하

function syncFunc1() {
  let sum = 0;

  for (let i = 0; i < 999999999; i++) {
    sum += i;
  }

  return sum;
}

function syncFunc2() {
  let sum = 0;

  for (let i = 0; i < 100; i++) {
    sum += i;
  }

  return sum;
}

function example() {
  console.log('첫 번째 작업 시작');
  let result1 = syncFunc1();
  console.log(`첫 번째 작업 완료: ${result1}`);

  console.log('두 번째 작업 시작');
  let result2 = syncFunc2();
  console.log(`두 번째 작업 완료: ${result2}`);
}

example();

//! 2. 비동기 프로그래밍
// : 앞선 코드의 실행이 완료될 때까지 기다리지 않고, 다음 코드를 실행하는 것
// - 프로그램의 메인 흐름과 병렬적으로 작업 가능

//? 장단점
// 장점) 병렬 처리와 효율성, 응답성 향상
// 단점) 복잡성 증가, 디버깅 어려움

//? setTimeout(A, B)
// 인자로 콜백함수와 지연 될 시간을 받아
// , B 밀리초 이후 A 함수 실행

function asyncFunc1() {
  setTimeout(() => {
    let sum = 0;

    for (let i = 0; i < 999999999; i++) {
      sum += i;
    }

    console.log(`시간이 오래 걸리는 계산식 결과: ${sum}`);
  }, 10); // 비동기 처리를 위한 시간 값
}

function asyncFunc2() {
  setTimeout(() => {
    let sum = 0;

    for (let i = 0; i < 100; i++) {
      sum += i;
    }

    console.log(`두 번째 작업(첫 번재 작업을 기다리지 않음): ${sum}`);
  }, 0); // 지연 시간 0 설정: 코드 대기 없이 곧바로 실행!
}

function example2() {
  console.log(`첫 번째 시작`);
  asyncFunc1(); // 추후 실행

  console.log(`두 번째 시작`);
  asyncFunc2(); // 우선 실행
}

example2();