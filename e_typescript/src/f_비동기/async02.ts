// async02.ts

//! Async & Await
// : 프로미스를 기반으로 비동기 작업을 간편하게 작성하는 방법
// - async 함수 내에서 await 키워드를 사용해서 비동기 코드 작성
//    >> async 내에서만 await 사용 가능
// - 동기 코드처럼 비동기 코드 작성 가능

async function fetchUserData() {
  try {
    // fetch('url')
    // : url의 경로로 데이터를 가져오다
    // - 해당 url을 통해서 서버에 데이터를 요청하고 반환된 응답을 Promise 형태(성공 또는 실패)로 가져옴
    // > Promise가 성공의 상태를 가질 경우 Response 객체 반환 (요청에 대한 반환값)

    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('데이터를 가져오는 데 실패하였습니다.');
    }

    const data = await response.json(); // 비동기 처리로 가져오는 데이터를 활용할 경우 반드시 비동기 처리!

    console.log(`가져온 데이터: ${data}`, data); // 가져온 데이터: [object Object]

    //? 객체와 배열은 템플릿 리터럴(${}) 내부에서 출력할 경우, 데이터 그 자체가 출력되지 않음

  } catch (error) {
    console.error('데이터 요청 중 오류: ', error);
  }
}

fetchUserData();
console.log('비동기 처리 함수 뒤의 코드 구문 (비동기를 기다리지 않음)');