import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSettings from "./components/TodoSettings";

function App() {
  const LOCAL_STORAGE_TODO_KEY = "todoList.key";
  const LOCAL_STORAGE_FILTER_KEY = "filter.key";
  const STORED_TODOS = localStorage.getItem(LOCAL_STORAGE_TODO_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY))
    : [];

  const STORED_FILTER = localStorage.getItem(LOCAL_STORAGE_FILTER_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_FILTER_KEY))
    : "all";

  const [todos, setTodos] = useState(STORED_TODOS);
  const [filterOption, setFilterOption] = useState(STORED_FILTER);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [searchInput, setSearchInput] = useState("");

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
          setSearchInput("");
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.complete));
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
          setSearchInput("");
      }
    }
    handleFilters();
  }, [todos, filterOption, searchInput]);

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
        <button>theme plchld</button>
      </header>
      <main>
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoList
          filteredTodos={filteredTodos}
          handleCheckTodo={handleCheckTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleEdit={handleToggleEdit}
          handleUpdateTodo={handleUpdateTodo}
        />
        <TodoSettings
          todos={todos}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setFilterOption={setFilterOption}
          handleClearTodo={handleClearTodo}
        />
        <p>Drag and drop to reorder list</p>
      </main>
    </div>
  );
}

export default App;
