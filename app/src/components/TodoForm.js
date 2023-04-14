import React, { useRef } from "react";

export default function TodoForm(props) {
  const { handleAddTodo } = props;
  const inputRef = useRef();

  function addTodo() {
    handleAddTodo(inputRef);
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={addTodo}>Add</button>
      <input type="text" placeholder="Create a new todo..." ref={inputRef} />
    </form>
  );
}
