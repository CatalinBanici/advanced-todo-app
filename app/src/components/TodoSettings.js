import React from "react";

export default function TodoSettings(props) {
  const { todos, handleClearTodo, setFilter, searchInput, setSearchInput } =
    props;

  function handleFilterClick(status) {
    setFilter(status);
  }
  return (
    <aside>
      <p>{todos.filter((todo) => !todo.complete).length} items left</p>
      <div>
        <input
          type="text"
          placeholder="Search a todo..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleFilterClick("search");
          }}
        />
        <div>
          <button onClick={() => handleFilterClick("all")}>All</button>
          <button onClick={() => handleFilterClick("active")}>Active</button>
          <button onClick={() => handleFilterClick("completed")}>
            Completed
          </button>
        </div>
      </div>
      <button onClick={handleClearTodo}>Clear Completed</button>
    </aside>
  );
}
