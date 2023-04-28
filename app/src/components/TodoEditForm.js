import React, { useState } from "react";

import { Draggable } from "@hello-pangea/dnd";

import { RxUpdate } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

export default function TodoEditForm(props) {
  const { todo, index, handleUpdateTodo, handleToggleEdit } = props;

  const [editInput, setEditInput] = useState(todo.textContent);

  function updateTodo() {
    handleUpdateTodo(editInput, todo.id);
  }

  return (
    <Draggable draggableId={`draggable-${todo.id}`} index={index}>
      {(provided, snapshot) => (
        <form
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="form-edit"
          onSubmit={(e) => e.preventDefault()}
        >
          <span {...provided.dragHandleProps}></span>
          <div className="btn-edit-container">
            <button
              className="btn-update"
              title="Update todo"
              onClick={() => updateTodo()}
            >
              <RxUpdate />
            </button>
          </div>

          <input
            type="text"
            placeholder="Update todo..."
            autoFocus
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />

          <div className="btn-cancel-container">
            <button
              className="btn-cancel"
              title="Cancel"
              onClick={() => handleToggleEdit(todo.id)}
            >
              <MdOutlineCancel />
            </button>
          </div>
        </form>
      )}
    </Draggable>
  );
}
