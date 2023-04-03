import { useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSettings from "./components/TodoSettings";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  function handleAddTodo() {
    const todoName = inputRef.current.value;
    if (todoName === "") return null;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 1000,
          todoNameText: todoName,
          complete: false,
        },
      ];
    });
    inputRef.current.value = "";
    console.log(todos);
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

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
        <button>theme plchld</button>
      </header>
      <main>
        <TodoForm
          inputRef={inputRef}
          handleSubmit={handleSubmit}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          handleCheckTodo={handleCheckTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <TodoSettings todos={todos} handleClearTodo={handleClearTodo} />
      </main>
    </div>
  );
}

export default App;
