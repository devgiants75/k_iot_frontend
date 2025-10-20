// app.js

//? 이름 붙여 가져오기 (Named Import)
import { TodoManager } from "./TodoManager.js";

// cf) 모듈을 가져올 경우 import문은 파일의 최상단에 작성 권장

// == 프로젝트 기능 정의 ==
// : TodoManager 모듈의 기능을 사용하여 할 일 앱 구현
// - 이벤트 등록, 할 일 목록 수정 등 로직을 담당

//? TodoManager의 인스턴스를 생성
const todoManager = new TodoManager();

// 콘텐츠 로드 이벤트 실행
document.addEventListener('DOMContentLoaded', () => {
  //! HTML 요소 가져오기
  const form = document.querySelector('#new-todo-form');
  const input = document.querySelector('#new-todo');
  const todoList = document.querySelector('#todo-list');

  form.addEventListener('submit', (e) => {
    // type="submit" 버튼 클릭 시 이벤트 발생

    // form 요소에서 submit 이벤트 발생 시 '기본 제출 이벤트를 방지'
    e.preventDefault();

    // form 내부 input의 데이터를 할 일 목록에 추가
    const text = input.value.trim();

    if (text !== '') {
      // 텍스트가 비워져있지 않다면
      todoManager.addTodo(text);
      input.value = '';
      updateTodoList(); // 리스트 업데이트
    }
  });

  //! 할 일 목록 업데이트 함수
  function updateTodoList() {
    // 모든 할 일 목록을 가져오기
    const todos = todoManager.getTodos();

    // ul 태그 내부의 데이터(내용) 삭제
    // HTML요소.innerHTML = '';
    // : 요소 내부의 전체 HTML 코드를 문자열로 반환
    todoList.innerHTML = '';

    todos.forEach(todo => {
      // 태그에 사용될 텍스트 전달
      const li = document.createElement('li');
      li.textContent = todo.text;

      // 순회되는 요소의 완료 여부에 따라 completed 클래스 사용
      if (todo.completed) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }

      li.addEventListener('click', () => {
        todoManager.toggleCompleted(todo.id);
        updateTodoList();
      });

      // 삭제 버튼 생성
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete-button');

      deleteButton.addEventListener('click', (e) => {
        e.stopPropagation(); // 부모(li) 클릭 이벤트 방지
        todoManager.removeTodo(todo.id);
        updateTodoList();
      });

      // ul >> li >> button
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
  }

  // 초기 목록 렌더링
  updateTodoList();
});