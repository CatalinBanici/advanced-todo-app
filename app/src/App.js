import { useEffect, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSettings from "./components/TodoSettings";

import { ReactComponent as ThemeButtonLight } from "./assets/images/icon-sun.svg";
import { ReactComponent as ThemeButtonDark } from "./assets/images/icon-moon.svg";

function App() {
  const LOCAL_STORAGE_TODO_KEY = "todoList.key";
  const LOCAL_STORAGE_FILTER_KEY = "filter.key";
  const LOCAL_STORAGE_THEME_KEY = "theme.key";

  const STORED_TODOS = localStorage.getItem(LOCAL_STORAGE_TODO_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY))
    : [];

  const STORED_FILTER = localStorage.getItem(LOCAL_STORAGE_FILTER_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_FILTER_KEY))
    : "all";

  const STORED_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME_KEY))
    : "dark";

  const [todos, setTodos] = useState(STORED_TODOS);
  const [filterOption, setFilterOption] = useState(STORED_FILTER);
  const [activeFilterStyle, setActiveFilterStyle] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [searchInput, setSearchInput] = useState("");
  const [theme, setTheme] = useState(STORED_THEME);

  // local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_FILTER_KEY,
      JSON.stringify(filterOption)
    );
  }, [filterOption]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(theme));
  }, [theme]);

  //adding todo to the list
  function handleAddTodo(input) {
    const inputRefValue = input.current.value;
    if (!inputRefValue || /^\s*$/.test(inputRefValue)) return null;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 1000,
          textContent: inputRefValue,
          complete: false,
          isEditing: false,
        },
      ];
    });
    input.current.value = "";
  }

  // editing todos
  function handleToggleEdit(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function handleUpdateTodo(input, id) {
    if (!input || /^\s*$/.test(input)) return null;
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, textContent: input, isEditing: !todo.isEditing }
          : todo
      )
    );
  }

  // checking complete and deleting todos
  function handleCheckTodo(id) {
    const todoObject = [...todos];
    const todoToCheck = todoObject.find((todo) => todo.id === id);
    todoToCheck.complete = !todoToCheck.complete;
    setTodos(todoObject);
  }

  function handleClearTodo() {
    const todosToClear = todos.filter((todo) => !todo.complete);
    setTodos(todosToClear);
  }

  function handleDeleteTodo(id) {
    const todoToDelete = todos.filter((todo) => todo.id !== id);
    setTodos(todoToDelete);
  }

  // filtering todos
  useEffect(() => {
    function handleFilters() {
      switch (filterOption) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.complete));
          setActiveFilterStyle("active");
          setSearchInput("");
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.complete));
          setActiveFilterStyle("completed");
          setSearchInput("");
          break;
        case "search":
          setFilteredTodos(
            todos.filter((todo) =>
              todo.textContent.toLowerCase().includes(searchInput.toLowerCase())
            )
          );
          break;
        default:
          setFilteredTodos(todos);
          setActiveFilterStyle("all");
          setSearchInput("");
      }
    }
    handleFilters();
  }, [todos, filterOption, searchInput]);

  // theme
  function handleThemeChange() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <div
      className={
        theme === "dark"
          ? "app-body background-dark"
          : "app-body background-light"
      }
      data-theme={theme}
    >
      <div className="app-container">
        <header>
          <h1>TODO</h1>
          <button
            className="btn-theme"
            title={
              theme === "dark"
                ? "Change to Light Theme"
                : "Change to Dark Theme"
            }
            onClick={handleThemeChange}
          >
            {theme === "dark" ? <ThemeButtonLight /> : <ThemeButtonDark />}
          </button>
        </header>
        <main>
          <TodoForm handleAddTodo={handleAddTodo} />
          <div className="section-aside-container">
            <TodoList
              todos={todos}
              filteredTodos={filteredTodos}
              activeFilterStyle={activeFilterStyle}
              handleCheckTodo={handleCheckTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleEdit={handleToggleEdit}
              handleUpdateTodo={handleUpdateTodo}
              LOCAL_STORAGE_TODO_KEY={LOCAL_STORAGE_TODO_KEY}
            />
            <TodoSettings
              todos={todos}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setFilterOption={setFilterOption}
              activeFilterStyle={activeFilterStyle}
              setActiveFilterStyle={setActiveFilterStyle}
              handleClearTodo={handleClearTodo}
            />
          </div>
        </main>
        <p className="dnd">Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
