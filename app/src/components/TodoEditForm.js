import React, { useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

export default function TodoEditForm(props) {
  const { todo, handleUpdateTodo, handleToggleEdit } = props;

  const [editInput, setEditInput] = useState(todo.textContent);

  function updateTodo() {
    handleUpdateTodo(editInput, todo.id);
  }

  return (
    <form className="form-edit" onSubmit={(e) => e.preventDefault()}>
      <button
        className="btn-update"
        title="Update todo"
        onClick={() => updateTodo()}
      >
        <RxUpdate />
      </button>

      <input
        type="text"
        placeholder="Update todo..."
        autoFocus
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
      />
      <button
        className="btn-cancel"
        title="Cancel"
        onClick={() => handleToggleEdit(todo.id)}
      >
        <MdOutlineCancel />
      </button>
    </form>
  );
}
