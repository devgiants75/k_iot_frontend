// dom02.js

//! DOM 조작하기

//? 1) 글자 조작하기
// 문서객체.textContent();
// : 입력된 문자열을 그대로! 넣기

// 문서객체.innerHTML();
// : 입력된 문자열을 HTML 형식으로 넣기 (문자열을 분석하여 HTML 요소로 인식)

document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');

  a.textContent = '<h2>textContent 속성</h2>';
  // >> 텍스트 자체가 내용으로 삽입

  b.innerHTML = '<h2>innerHTML 속성</h2>';
  // >> HTML 문서 구조를 인식하고 해석한 뒤 내용만 삽입
});

//? 2) 속성 조작하기
// : 문서 객체의 속성(attribute)을 조작

// cf) HTML 요소의 부가 기능을 속성으로 작성
//        === JS 객체의 속성: 객체의 기능 명시(객체.속성명)

// 문서객체.setAttribute(속성이름, 값)
// >> 특정 속성에 값을 지정

// 문서객체.getAttribute(속성이름)
// >> 특정 속성값을 추출

document.addEventListener('DOMContentLoaded', () => {
  const dogs = document.querySelectorAll('.dog');
  
  dogs.forEach((dog, index) => {
    // 배열 메서드 콜백함수의 인자: 각 요소, 인덱스번호, 배열그자체
    const width = (index + 1) * 100; // 100, 200, 300, 400

    dog.setAttribute('width', width);
    dog.setAttribute('height', '250px');
  });
});