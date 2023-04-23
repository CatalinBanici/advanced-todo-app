import React from "react";

export default function TodoSettings(props) {
  const {
    todos,
    handleClearTodo,
    setFilterOption,
    setActiveStyle,
    activeStyle,
    searchInput,
    setSearchInput,
  } = props;

  function handleFilterOption(status) {
    setFilterOption(status);
    setActiveStyle(status);
  }
  return (
    <aside>
      <p className="items-left">
        {todos.filter((todo) => !todo.complete).length}{" "}
        {todos.filter((todo) => !todo.complete).length > 1
          ? "items left"
          : "item left"}
      </p>
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
            className={
              activeStyle === "all" ? "btn-filter active" : "btn-filter"
            }
            onClick={() => handleFilterOption("all")}
          >
            All
          </button>
          <button
            className={
              activeStyle === "active" ? "btn-filter active" : "btn-filter"
            }
            onClick={() => handleFilterOption("active")}
          >
            Active
          </button>
          <button
            className={
              activeStyle === "completed" ? "btn-filter active" : "btn-filter"
            }
            onClick={() => handleFilterOption("completed")}
          >
            Completed
          </button>
        </div>
      </div>
      <button className="btn-clear" onClick={handleClearTodo}>
        Clear Completed
      </button>
    </aside>
  );
}
