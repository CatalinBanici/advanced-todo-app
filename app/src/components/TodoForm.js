import React, { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

export default function TodoForm(props) {
  const { handleAddTodo } = props;
  const inputRef = useRef();

  function addTodo() {
    handleAddTodo(inputRef);
  }
  return (
    <form className="form-add" onSubmit={(e) => e.preventDefault()}>
      <div className="btn-add-container">
        <button className="btn-add" onClick={addTodo}>
          <IoMdAdd />
        </button>
      </div>

      <input type="text" placeholder="Create a new todo..." ref={inputRef} />
    </form>
  );
}
