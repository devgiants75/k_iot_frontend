// pratice02.ts

//! == 사용자 데이터를 요청하는 로직 (JSONPlaceholder 사용) == //

//@ 1. 사용자 데이터 요청에 대한 응답 데이터 정의 (타입 별칭)
type Success = {
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string; // 대표 문장
  }
}

type Fail = {
  error: string;
}

// 두 타입을 합친 유니언 타입
type FetchResponse = Success | Fail;

//@ 2. 비동기 작업을 사용하여 JSONPlaceholder에서 사용자 데이터 가져오는 함수 정의 
async function fetchUserData(userId: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // : fetch 함수: Response 객체 반환

    if (!response.ok) {
      throw new Error('네트워크 응답이 실패하였습니다.');
    }

    const data = await response.json(); // 객체 형식으로 데이터 반환

    if (data.id) {
      const userData: FetchResponse = {
        name: data.name,
        email: data.email,
        company: {
          name: data.company.name,
          catchPhrase: data.company.catchPhrase
        }
      };
      handleResponse(userData);
    } else {
      // 존재하지 않는 사용자인 경우
      handleResponse({ error: '사용자 데이터가 정확하지 않습니다.' });
    }

  } catch (error) {
    // instanceof 연산자
    // : A instanceof B -> A가 B 클래스의 인스턴스(객체)인지 확인
    // EX) error instanceof Error -> error가 Error 타입인지 확인
    handleResponse({ 
      error: error instanceof Error ? error.message : 'Unknown Error'
    });
  }
}

function handleResponse(response: FetchResponse) {
  //? in 연산자
  // '속성명' in 객체명
  // - 해당 속성이 객체에 있는지 여부를 boolean 타입으로 반환
  
  if ('error' in response) {
    console.error(response.error);
  } else {
    console.log(`Name: ${response.name}, Email: ${response.email}, Company: ${response.company.name}`);
  }
}

fetchUserData(1);
fetchUserData(2);
fetchUserData(222); // 네트워크 응답이 실패하였습니다.