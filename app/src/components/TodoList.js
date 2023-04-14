import React from "react";
import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";

export default function TodoList(props) {
  const {
    filteredTodos,
    handleCheckTodo,
    handleDeleteTodo,
    handleToggleEdit,
    handleUpdateTodo,
  } = props;
  return (
    <section>
      <ul>
        {filteredTodos.map((todo) =>
          todo.isEditing ? (
            <TodoEditForm
              key={todo.id}
              todo={todo}
              handleUpdateTodo={handleUpdateTodo}
              handleToggleEdit={handleToggleEdit}
            />
          ) : (
            <Todo
              key={todo.id}
              todo={todo}
              handleCheckTodo={handleCheckTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleEdit={handleToggleEdit}
            />
          )
        )}
      </ul>
    </section>
  );
}
