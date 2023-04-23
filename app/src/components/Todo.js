import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Todo(props) {
  const { todo, handleCheckTodo, handleDeleteTodo, handleToggleEdit } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.complete}
        title={todo.complete ? "Mark as unchecked" : "Mark as checked"}
        onChange={() => handleCheckTodo(todo.id)}
      />
      <span className="checkmark"></span>
      <p>{todo.textContent}</p>
      <button
        className="btn-edit"
        title="Edit todo"
        onClick={() => handleToggleEdit(todo.id)}
      >
        <FaRegEdit />
      </button>
      <button
        className="btn-delete"
        title="Delete todo"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        <RxCross2 />
      </button>
    </li>
  );
}
