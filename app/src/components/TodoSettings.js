import React from "react";

export default function TodoSettings(props) {
  const {
    todos,
    handleClearTodo,
    setFilterOption,
    activeFilterStyle,
    setActiveFilterStyle,
    searchInput,
    setSearchInput,
  } = props;

  function handleFilterOption(status) {
    setFilterOption(status);
    setActiveFilterStyle(status);
  }
  return (
    <>
      <aside>
        <div className="aside-container">
          <p className="items-left">
            {todos.filter((todo) => !todo.complete).length}
            {todos.filter((todo) => !todo.complete).length === 1
              ? " item left"
              : " items left"}
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
                  activeFilterStyle === "all"
                    ? "btn-filter active"
                    : "btn-filter"
                }
                onClick={() => handleFilterOption("all")}
              >
                All
              </button>
              <button
                className={
                  activeFilterStyle === "active"
                    ? "btn-filter active"
                    : "btn-filter"
                }
                onClick={() => handleFilterOption("active")}
              >
                Active
              </button>
              <button
                className={
                  activeFilterStyle === "completed"
                    ? "btn-filter active"
                    : "btn-filter"
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
        </div>
      </aside>

      <div className="filter-container-2">
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
              activeFilterStyle === "all" ? "btn-filter active" : "btn-filter"
            }
            onClick={() => handleFilterOption("all")}
          >
            All
          </button>
          <button
            className={
              activeFilterStyle === "active"
                ? "btn-filter active"
                : "btn-filter"
            }
            onClick={() => handleFilterOption("active")}
          >
            Active
          </button>
          <button
            className={
              activeFilterStyle === "completed"
                ? "btn-filter active"
                : "btn-filter"
            }
            onClick={() => handleFilterOption("completed")}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
}
