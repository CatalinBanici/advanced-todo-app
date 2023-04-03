import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, handleCheckTodo, handleDeleteTodo } = props;
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCheckTodo={handleCheckTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}
