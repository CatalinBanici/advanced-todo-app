import React from "react";

import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export default function TodoList(props) {
  const {
    todos,
    filteredTodos,
    activeFilterStyle,
    handleCheckTodo,
    handleDeleteTodo,
    handleToggleEdit,
    handleUpdateTodo,
    LOCAL_STORAGE_TODO_KEY,
  } = props;
  return (
    <section>
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI >= 0 && activeFilterStyle === "all") {
            todos.splice(desI, 0, todos.splice(srcI, 1)[0]);
            localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
          }
        }}
      >
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {filteredTodos.map((todo, index) =>
                todo.isEditing ? (
                  <TodoEditForm
                    key={todo.id}
                    index={index}
                    todo={todo}
                    handleUpdateTodo={handleUpdateTodo}
                    handleToggleEdit={handleToggleEdit}
                  />
                ) : (
                  <Todo
                    key={todo.id}
                    index={index}
                    todo={todo}
                    handleCheckTodo={handleCheckTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleEdit={handleToggleEdit}
                  />
                )
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}
