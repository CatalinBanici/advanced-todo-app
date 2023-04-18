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
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search a todo..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleFilterOption("search");
          }}
        />
        <div className="btn-filter-container">
          <button
            className="btn-filter"
            onClick={() => handleFilterOption("all")}
          >
            All
          </button>
          <button
            className="btn-filter"
            onClick={() => handleFilterOption("active")}
          >
            Active
          </button>
          <button
            className="btn-filter"
            onClick={() => handleFilterOption("completed")}
          >
            Completed
          </button>
        </div>
      </div>
      <button onClick={handleClearTodo}>Clear Completed</button>
    </aside>
  );
}
