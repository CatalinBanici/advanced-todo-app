import React from "react";

export default function Todo(props) {
  const { todo } = props;
  return (
    <li>
      <input type="checkbox" />
      <p>{todo.todoNameText}</p>
      <button>X</button>
    </li>
  );
}
