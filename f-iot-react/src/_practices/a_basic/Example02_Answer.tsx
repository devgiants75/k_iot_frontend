import React from 'react'

// 1️⃣ Todo 타입 정의
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// 2️⃣ TodoItem 컴포넌트
interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {/* done이 true면 <s>로 감싸고, 아니면 그냥 출력 */}
      {todo.done ? (
        <p>
          ✅ <s>{todo.text}</s>
        </p>
      ) : (
        <p>⬜ {todo.text}</p>
      )}
    </div>
  );
};

// 3️⃣ TodoBoard 컴포넌트
interface TodoBoardProps {
  todos: Todo[];
}

const TodoBoard: React.FC<TodoBoardProps> = ({ todos }) => {
  const total = todos.length;
  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div>
      <h2>할 일 대시보드</h2>
      {/* 조건부 렌더링: 할 일이 없으면 문장 출력 */}
      {total === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        <>
          <p>
            완료 {doneCount} / 전체 {total}
          </p>
          {/* 배열 렌더링 */}
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </>
      )}
    </div>
  );
};

// 4️⃣ Example02_Answer 컴포넌트 (데이터 정의 및 전달)
const Example02_Answer: React.FC = () => {
  const todos: Todo[] = [
    { id: 1, text: "React 문법 복습", done: true },
    { id: 2, text: "Props 이해하기", done: false },
    { id: 3, text: "조건부 렌더링 연습", done: false },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <TodoBoard todos={todos} />
    </div>
  );
};

export default Example02_Answer;
