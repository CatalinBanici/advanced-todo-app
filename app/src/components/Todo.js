import React from "react";

export default function Todo(props) {
  const { todo, handleCheckTodo, handleDeleteTodo, handleToggleEdit } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => handleCheckTodo(todo.id)}
      />
      <p>{todo.textContent}</p>
      <button onClick={() => handleToggleEdit(todo.id)}>edit</button>
      <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
    </li>
  );
}
