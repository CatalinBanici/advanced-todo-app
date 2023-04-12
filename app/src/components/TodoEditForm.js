import React from "react";

export default function TodoEditForm(props) {
  const { editInput, setEditInput, handleUpdateTodo, todo } = props;
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={() => handleUpdateTodo(todo.id)}>update</button>
      <input
        type="text"
        placeholder="Update todo..."
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
      />
    </form>
  );
}
