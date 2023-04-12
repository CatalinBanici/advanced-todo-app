import React from "react";

export default function TodoEditForm(props) {
  const { editInput, setEditInput, handleUpdateTodo, handleToggleEdit, todo } =
    props;
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={() => handleUpdateTodo(todo.id)}>update</button>
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
