import React from "react";

export default function Todo(props) {
  const { todo, handleCheckTodo, handleDeleteTodo } = props;

  function handleTodoClickCheck() {
    handleCheckTodo(todo.id);
  }

  function handleTodoClickDelete() {
    handleDeleteTodo(todo.id);
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClickCheck}
        />
        <p>{todo.todoNameText}</p>
      </label>
      <button onClick={handleTodoClickDelete}>X</button>
    </li>
  );
}
