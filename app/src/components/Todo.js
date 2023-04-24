import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Draggable } from "@hello-pangea/dnd";

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
          <input
            type="checkbox"
            checked={todo.complete}
            title={todo.complete ? "Mark as unchecked" : "Mark as checked"}
            onChange={() => handleCheckTodo(todo.id)}
          />
          <span className="checkmark"></span>
          <p {...provided.dragHandleProps}>{todo.textContent}</p>
          <button
            className="btn-edit"
            title="Edit todo"
            onClick={() => handleToggleEdit(todo.id)}
          >
            <FaRegEdit />
          </button>
          <button
            className="btn-delete"
            title="Delete todo"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <RxCross2 />
          </button>
        </li>
      )}
    </Draggable>
  );
}
