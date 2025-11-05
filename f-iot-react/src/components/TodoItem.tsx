import type { Todo } from '@/_practices/c_hooks/TodoAppLocalStorage'
import React from 'react'

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem