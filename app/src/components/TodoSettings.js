import React from "react";

export default function TodoSettings(props) {
  const {
    todos,
    handleClearTodo,
    setFilterOption,
    searchInput,
    setSearchInput,
  } = props;

  function handleFilterOption(status) {
    setFilterOption(status);
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
            handleFilterOption("search");
          }}
        />
        <div>
          <button onClick={() => handleFilterOption("all")}>All</button>
          <button onClick={() => handleFilterOption("active")}>Active</button>
          <button onClick={() => handleFilterOption("completed")}>
            Completed
          </button>
        </div>
      </div>
      <button onClick={handleClearTodo}>Clear Completed</button>
    </aside>
  );
}
