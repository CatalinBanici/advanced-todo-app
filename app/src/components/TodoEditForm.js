import React, { useState } from "react";

export default function TodoEditForm(props) {
  const { todo, handleUpdateTodo, handleToggleEdit } = props;

  const [editInput, setEditInput] = useState(todo.textContent);

  function updateTodo() {
    handleUpdateTodo(editInput, todo.id);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={() => updateTodo()}>update</button>
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
