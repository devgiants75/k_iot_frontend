import React from 'react'

//! 렌더링(Rendering)
// : 작성한 코드를 화면에 출력하는 기능
// - React가 코드(JSX/TSX)를 실제 브라우저 화면(UI)로 바꾸는 과정

// cf) React는 데이터(state, props)가 변경되면 필요한 부분만 다시 렌더링
//     > 화면 전체가 아니라 변경된 컴포넌트만 효율적으로 갱신! (재렌더링)

interface ItemType {
  // 여행 짐 싸기
  // : 짐 항목의 이름, 준비 완료 여부
  name: string;
  isPacked: boolean;
}

//! 자식 컴포넌트
function Item({ name, isPacked }: ItemType) {
  //? 조건부 렌더링
  // : 조건에 따라 UI를 다르게 보여주는 방법
  // - if문: 가장 명확, JSX 안에서 사용 불가 (return 위에서 처리)
  // - 삼항 연산자: JSX 안에서 표현 가능, 한 줄로 간결
  // - 논리 연산자: "조건이 참인 경우에만 and", "조건이 거짓인 경우에만 and"

  //@ 1. if 조건문을 사용한 조건부 렌더링
  //? react의 JSX는 괄호가 문법적 요소로 사용 - return문 위에서 작성
  // if (isPacked) {
  //   return (
  //     <li>{name} ✔️</li>
  //   )
  // } else {
  //   return (
  //     <li>{name}</li>
  //   )
  // }

  //@ 2. 삼항 연산자를 사용한 조건부 렌더링
  // 조건 ? 참일 경우 : 거짓일 경우
  // return (
  //   <li>{isPacked ? name + '✔️' : name}</li>
  // )

  //@ 3. 논리 연산자를 사용한 조건부 렌더링
  return (
    <li>
      {/* 
        == 논리 연산자 A && B ==
        : 모든 값이 true여야 true값 반환
        - A가 false면 B값 출력 X
        - A가 true면 B값 출력 O      
      */}
      {name} {isPacked && '❤️'}
    </li>
  )
}

function I_Rendering() {
  //! 배열 렌더링
  // : 배열 렌더링 시 map() 메서드를 사용
  // - 리액트는 return문 안에서 JSX 요소들의 배열을 렌더링
  // > 순회한 후 데이터 값이 있어야 element에 데이터 전달

  // cf) forEach()는 단순 반복 실행만 하고 리턴값이 없음!
  const people = ['조승범', '윤대휘', '박성욱', '김소빈', '최현우'];

  const peopleDescription = [
    {
      id: 0,
      name: '조승범',
      job: '원장'
    },
    {
      id: 1,
      name: '윤대휘',
      job: '멘토'
    },
    {
      id: 2,
      name: '이승아',
      job: '강사'
    },
    {
      id: 3,
      name: '김준일',
      job: '강사'
    },
    {
      id: 4,
      name: '이은우',
      job: '멘토'
    },
  ];

  //@ map 콜백함수를 사용한 배열 렌더링
  // : 요소 개수 변화 X
  // - 전체 내용 렌더링
  const listItems = people.map((person, index) => {
    return <li key={index}>{person}</li>
  });

  //@ filter 콜백함수를 사용한 배열 렌더링
  // : 요소 개수 변화 O
  // - 조건에 따른 렌더링
  const businessPeople = peopleDescription.filter(person => person.job === '강사');

  const businessPeopleRender = businessPeople.map(person => <li key={person.id}>{person.name}</li>);

  //! === React 렌더링 시 key 속성 === //
  // : React에서 배열의 각 항목을 식별하고 성능을 최적화하기 위해 사용
  // - map()을 통해 여러 요소를 렌더링할 때
  // , key는 React가 어떤 항목이 변경, 추가 또는 삭제 되었는지 파악하는 용도로 사용
  //? 같은 배열 내에서 유일 (데이터의 PK값을 주로 사용)

  return (
    <div>
      <p>여행용 짐 목록</p>
      <Item name='과자' isPacked={true} />
      <Item name='음료수' isPacked={false} />

      <hr />
      <p>Map을 사용한 전체 리스트 렌더링</p>
      <ul>{listItems}</ul>

      <hr />
      <p>Filter를 사용한 조건부 렌더링</p>
      <ul>{businessPeopleRender}</ul>
    </div>
  )
}

export default I_Rendering