import React from "react";

export default function TodoSettings(props) {
  const { todos, handleClearTodo } = props;
  return (
    <aside>
      <p>{todos.filter((todo) => !todo.complete).length} items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button onClick={handleClearTodo}>Clear Completed</button>
    </aside>
  );
}
