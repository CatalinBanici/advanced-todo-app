import React from "react";

export default function Todo(props) {
  const { todo, handleCheckTodo, handleDeleteTodo, handleToggleEdit } = props;

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleCheckTodo(todo.id)}
        />
        <p>{todo.textContent}</p>
      </label>
      <button
        onClick={() => handleToggleEdit(todo.id)}
        disabled={todo.isEditing}
      >
        edit
      </button>
      <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
    </li>
  );
}
