import React from "react";

export default function TodoForm(props) {
  const { todoNameRef, handleSubmit, updateTodoList } = props;
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={updateTodoList}>Add</button>
      <input type="text" ref={todoNameRef} />
    </form>
  );
}
