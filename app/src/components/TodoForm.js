import React from "react";

export default function TodoForm(props) {
  const { inputRef, handleSubmit, handleAddTodo } = props;
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleAddTodo}>Add</button>
      <input type="text" ref={inputRef} />
    </form>
  );
}
