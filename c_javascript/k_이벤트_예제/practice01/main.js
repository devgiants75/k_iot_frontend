// main.js

let todoInput = document.querySelector('#todo-input');
let addButton = document.querySelector('#add-button');
let todoList = document.querySelector('#todo-list');

// 이벤트 핸들러 함수
function addTodo() {
  // input 태그에 입력 값이 있는 경우에만 li 내용 생성
  if (todoInput.value !== '') {
    // 동적으로 li 태그 생성
    // : documnet.createElement('태그명');
    // - 생성된 태그가 곧바로 웹 문서에 할당되지 X
    // - 보여질 위치의 부모 요소 내에 삽입
    let newItem = document.createElement('li');

    // 새로운 li태그의 내용값 = input 창의 입력값;
    newItem.textContent = todoInput.value;

    // 요소에 class 속성 추가
    // : li태그는 이벤트에 따라 동적으로 여러 개 생성 가능
    // : HTML요소.classList.add('클래스명');
    newItem.classList.add('todo-item');

    // 생성된 li태그를 ul 태그 내에 삽입
    // : 부모요소.appendChild(자식요소);
    todoList.appendChild(newItem);

    //? input 등과 같이 상호작용 된 데이터는 사용 후 해당 데이터 초기화
    todoInput.value = '';
  }
}

// 추가 버튼 클릭 시
addButton.addEventListener('click', addTodo);

// +) Enter 키보드 클릭으로 할 일 등록
//    : Enter 키 다운 시 
todoInput.addEventListener('keydown', (e) => {
  //? 특정 키에 반응하여 이벤트 발생 시
  //    , 이벤트 객체에서 어떤 키의 이벤트인지 확인!
  // : e.key - 키보드 이벤트 발생 시 입력된 키 값이 반환 
  if (e.key === 'Enter') {
    addTodo();
  }
});

// e: 이벤트 객체
// - target: 이벤트가 발생한 요소를 참조*
// - currentTarget: 이벤트가 첨부된 요소 (todoList)
todoList.addEventListener('click', (e) => {
  // >> todoList 내부에 todoItem이 여러 개 나열
  //    : todoItem 클릭 시 todoItem 내용의 글자 디자인 변경

  //? 각 할 일 리스트 클릭 시
  // : 완료한 경우 .completed 속성을 추가 (CSS 디자인 첨부)

  // e.target: 실제 이벤트가 발생되는 요소
  // +) DOM 요소의 태그명 가져오기
  //    : HTML요소.tagName
  //    : 태그명의 알파벳이 모두 대문자 표기 (A, LI, DIV 등)
  if (e.target.tagName === 'LI') {
    // HTML요소.classList: class 속성에 접근

    // cf) .togglet('클래스명') 속성
    // : classList에서 해당 클래스명이 토글
    //    - 있으면 "삭제"
    //    - 없으면 "추가"
    e.target.classList.toggle('completed');
  }
});

//! 현재 글자 수 출력하기
document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.querySelector('#word-input');
  const p = document.querySelector('#para');

  wordInput.addEventListener('keyup', () => {
    const length = wordInput.value.length;
    p.textContent = `글자 수: ${length}`;
    console.log(length);
  });

});