import React from "react";

export default function Todo({ todo }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{todo.todoName}</p>
      <button>X</button>
    </li>
  );
}
