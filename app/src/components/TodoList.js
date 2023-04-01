import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
