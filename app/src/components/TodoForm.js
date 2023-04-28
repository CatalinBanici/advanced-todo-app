import React, { useRef } from "react";

import { IoAddSharp } from "react-icons/io5";

export default function TodoForm(props) {
  const { handleAddTodo } = props;
  const inputRef = useRef();

  function addTodo() {
    handleAddTodo(inputRef);
  }
  return (
    <form className="form-add" onSubmit={(e) => e.preventDefault()}>
      <div className="btn-add-container">
        <button className="btn-add" title="Add todo" onClick={addTodo}>
          <IoAddSharp />
        </button>
      </div>

      <input type="text" placeholder="Create a new todo..." ref={inputRef} />
    </form>
  );
}
