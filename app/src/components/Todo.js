import React from "react";

import { Draggable } from "@hello-pangea/dnd";

import { FiEdit3 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";

export default function Todo(props) {
  const { todo, index, handleCheckTodo, handleDeleteTodo, handleToggleEdit } =
    props;

  return (
    <Draggable draggableId={`draggable-${todo.id}`} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{
            ...provided.draggableProps.style,
            border: snapshot.isDragging
              ? "1px solid var(--Text4)"
              : "1px solid var(--Text4)",
          }}
        >
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={todo.complete}
              title={todo.complete ? "Mark as unchecked" : "Mark as checked"}
              onChange={() => handleCheckTodo(todo.id)}
            />
            <span className="checkmark">
              {todo.complete ? <AiOutlineCheck /> : null}
            </span>
          </div>

          <p
            style={
              todo.complete
                ? { color: "var(--Text3)", textDecoration: "line-through" }
                : null
            }
            {...provided.dragHandleProps}
          >
            {todo.textContent}
          </p>

          <div className="btn-edit-del-container">
            <button
              className="btn-edit"
              title="Edit todo"
              onClick={() => handleToggleEdit(todo.id)}
            >
              <FiEdit3 />
            </button>

            <button
              className="btn-delete"
              title="Delete todo"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <RxCross2 />
            </button>
          </div>
        </li>
      )}
    </Draggable>
  );
}
