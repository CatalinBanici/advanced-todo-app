import React from "react";

export default function Todo(props) {
  const { todo, handleCheckTodo, handleDeleteTodo } = props;

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleCheckTodo(todo.id)}
        />
        <p>{todo.content}</p>
      </label>
      <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
    </li>
  );
}
