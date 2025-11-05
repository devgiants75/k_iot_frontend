import TodoList from "@/components/TodoList";
import React, { useEffect, useRef, useState } from "react";

//! Hooks + 로컬 스토리지
// : 백엔드+DB를 대신하여 로컬 스토리지로 CRUD 구현
// - 로컬 스토리지에서 데이터를 불러오고, 상태 관리
//   , 할 일을 추가, 삭제, 토글하는 기능 구현

//@ 1. 할 일(Todo) 타입 정의
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//@ 2. 로컬 스토리지의 데이터를 불러오는 함수
//  : 저장된 데이터 값을 상태관리에 전달
const loadTodosFromLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

function TodoAppLocalStorage() {
  //^ === Hooks ===
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromLocalStorage);
  const [inputValue, setInputValue] = useState<string>("");
  const nextId = useRef<number>(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
  );

  useEffect(() => {
    //@ todos 배열의 변경에 따라 localStorage의 데이터 새로고침
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //^ === Event Handler ===
  //? 1. 할 일 추가
  const onAddTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: nextId.current,
      text: inputValue.trim(),
      completed: false
    }

    setTodos([...todos, newTodo]);

    nextId.current += 1;
    setInputValue('');
  }

  //? 2. 할 일 토글 (완료 여부)
  const onToggleTodoCompleted = (id: number) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  };

  //? 3. 할 일 삭제
  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h5>Todo List</h5>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={e => (e.key === 'Enter') ? onAddTodo() : null}
      />
      <button onClick={onAddTodo}>Todo 저장</button>
      <TodoList
        todos={todos}
        toggleTodo={onToggleTodoCompleted}
        deleteTodo={onDeleteTodo}
      />
    </div>
  );
}

export default TodoAppLocalStorage;
