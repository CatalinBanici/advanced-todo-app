import React from "react";

export default function TodoForm(props) {
  const { inputRef, handleAddTodo } = props;
  return (
    <form>
      <button onClick={handleAddTodo}>Add</button>
      <input type="text" placeholder="Create a new todo..." ref={inputRef} />
    </form>
  );
}
