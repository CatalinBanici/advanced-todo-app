import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSettings from "./components/TodoSettings";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todoName: "example1",
      checked: false,
    },
    {
      id: 2,
      todoName: "example2",
      checked: false,
    },
  ]);

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
        <button>theme plchld</button>
      </header>
      <main>
        <TodoForm />
        <TodoList todos={todos} />
        <TodoSettings />
      </main>
    </div>
  );
}

export default App;
