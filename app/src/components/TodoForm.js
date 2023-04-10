import React from "react";

export default function TodoForm(props) {
  const { inputRef, handleAddTodo } = props;
  return (
    <form>
      <button onClick={handleAddTodo}>Add</button>
      <input type="text" ref={inputRef} />
    </form>
  );
}
