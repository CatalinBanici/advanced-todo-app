import React, { useState } from "react";

export default function TodoEditForm(props) {
  const { handleUpdateTodo, handleToggleEdit, todo } = props;

  const [editInput, setEditInput] = useState(todo.textContent);

  function handleSubmit() {
    handleUpdateTodo(editInput, todo.id);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={() => handleSubmit()}>update</button>
      <input
        type="text"
        placeholder="Update todo..."
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
      />
      <button onClick={() => handleToggleEdit(todo.id)}>x</button>
    </form>
  );
}
