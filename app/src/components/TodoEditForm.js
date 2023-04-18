import React, { useState } from "react";

export default function TodoEditForm(props) {
  const { todo, handleUpdateTodo, handleToggleEdit } = props;

  const [editInput, setEditInput] = useState(todo.textContent);

  function updateTodo() {
    handleUpdateTodo(editInput, todo.id);
  }

  return (
    <form className="form-edit" onSubmit={(e) => e.preventDefault()}>
      <div className="btn-update-container">
        <button className="btn-update" onClick={() => updateTodo()}>
          +
        </button>
      </div>

      <input
        type="text"
        placeholder="Update todo..."
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
      />
      <button className="btn-cancel" onClick={() => handleToggleEdit(todo.id)}>
        x
      </button>
    </form>
  );
}
