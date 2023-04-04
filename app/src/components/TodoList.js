import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { handleCheckTodo, handleDeleteTodo, filteredTodos } = props;
  return (
    <section>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleDeleteTodo={handleDeleteTodo}
            filteredTodos={filteredTodos}
          />
        ))}
      </ul>
    </section>
  );
}
