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
      <button className="btn-edit" onClick={() => handleToggleEdit(todo.id)}>
        edit
      </button>
      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        X
      </button>
    </li>
  );
}
