import React from "react";
import Todo from "./Todo";
import TodoEditForm from "./TodoEditForm";

export default function TodoList(props) {
  const {
    handleCheckTodo,
    handleDeleteTodo,
    filteredTodos,
    editInput,
    setEditInput,
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
              editInput={editInput}
              setEditInput={setEditInput}
              handleUpdateTodo={handleUpdateTodo}
              todo={todo}
            />
          ) : (
            <Todo
              key={todo.id}
              todo={todo}
              handleCheckTodo={handleCheckTodo}
              handleDeleteTodo={handleDeleteTodo}
              filteredTodos={filteredTodos}
              handleToggleEdit={handleToggleEdit}
            />
          )
        )}
      </ul>
    </section>
  );
}
