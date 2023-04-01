import { useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSettings from "./components/TodoSettings";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function updateTodoList() {
    const todoName = todoNameRef.current.value;
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
    todoNameRef.current.value = "";
    console.log(todos);
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
          todoNameRef={todoNameRef}
          handleSubmit={handleSubmit}
          updateTodoList={updateTodoList}
        />
        <TodoList todos={todos} />
        <TodoSettings />
      </main>
    </div>
  );
}

export default App;
