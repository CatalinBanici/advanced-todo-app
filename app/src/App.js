import { useEffect, useRef, useState } from "react";
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
  const [filter, setFilter] = useState(STORED_FILTER);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_FILTER_KEY, JSON.stringify(filter));
  }, [filter]);

  function handleAddTodo(e) {
    e.preventDefault();
    const inputRefValue = inputRef.current.value;
    if (inputRefValue === "") return null;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 1000,
          textContent: inputRefValue,
          complete: false,
        },
      ];
    });
    inputRef.current.value = "";
  }

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

  useEffect(() => {
    function handleFilters() {
      switch (filter) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.complete));
          break;
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.complete));
          break;
        default:
          setFilteredTodos(todos);
      }
    }
    handleFilters();
  }, [todos, filter]);

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
        <button>theme plchld</button>
      </header>
      <main>
        <TodoForm inputRef={inputRef} handleAddTodo={handleAddTodo} />
        <TodoList
          handleCheckTodo={handleCheckTodo}
          handleDeleteTodo={handleDeleteTodo}
          filteredTodos={filteredTodos}
        />
        <TodoSettings
          todos={todos}
          handleClearTodo={handleClearTodo}
          setFilter={setFilter}
        />
        <p>Drag and drop to reorder list</p>
      </main>
    </div>
  );
}

export default App;
