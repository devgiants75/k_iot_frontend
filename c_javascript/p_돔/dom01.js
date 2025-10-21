// dom01.js

//# DOM (문서 객체 모델, Document Object Model)

// cf) JS 문서 객체
// : HTML 안에서 요소(Element)로 불리는 객체
// : JS 문서 객체 === HTML 요소

//! DOM 정의
// : 웹 페이지를 문서 객체로 조작하고 관리할 수 있는 인터페이스 

//! DOM 사용 방법
// : JS에서 HTML의 요소를 문서 객체로서
//    , 선택/추가/수정/삭제하는 메서드와 속성 사용

//! DOM 조작 방법

//? 1) DOMContentLoaded 이벤트
// : JS 내에서 문서 객체 조작 시 
//    , HTML의 모든 문서 구조(내용)가 모두 로드된 이후에 이벤트 발생

document.addEventListener('DOMContentLoaded', () => {
  // DOM 조작 기능 작성 가능
});

//? 2) 문서 객체 가져오기

// 2-1) 전체 HTML 구조를 객체로 인식하여 속성을 가져옴(중첩 객체)
// document.head / document.title / document.body.p.strong

// 2-2) querySelector('선택자') & querySelectorAll('선택자') 메서드
// : 선택자를 활요하여 단일 또는 여러 개의 요소를 읽어올 때 사용
// - 태그명, #아이디명, .클래스명. 선택자A 선택자B
document.addEventListener('DOMContentLoaded', () => {
  // querySelector()
  // : 요소를 단 한개만 추출 (여러 개일 경우 제일 상단의 요소만 가져옴)
  const header = document.querySelector('h1');

  header.textContent = 'HEADER ONE';
  header.style.color = 'white';
  header.style.backgroundColor = 'black';
  header.style.padding = '20px';

  // querySelectorAll()
  // : 문서 객체 여러 개를 배열로 추출
  const items = document.querySelectorAll('li');

  items.forEach(item => {
    item.textContent = 'LIST ITEM';
    item.style.color = 'pink';
    item.style.listStyle = 'none';
    item.style.backgroundColor = 'black';
  });
});

// 2-3) getElementById('아이디명');
// : 주어진 ID를 가진 요소를 찾아 해당 요소를 반환
// - ID의 경우 문서 내에서 유일!
// - # 기호 없이 아이디명만 문자열로 전달
document.addEventListener('DOMContentLoaded', () => {
  const divElement = document.getElementById('getElementById');

  divElement.style.color = 'blue';
  divElement.style.backgroundColor = 'yellow';
  divElement.classList.add('special');
});

//? cf) .getElementsByClassName('클래스명')
//      : 해당 클래스명을 가진 요소를 '컬렉션 객체'로 반환 (유사 배열)
//      >> 배열 메서드, 인덱스 번호 사용 X (사용 권장 X)