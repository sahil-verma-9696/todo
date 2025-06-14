import TodoList from "./components/TodoList";
import AddTodoBtn from "./components/ui/Button";
import CreateTodo from "./components/form/CreateTodo";
import { useState } from "react";

export default function App() {
  // function mapToTODO()

  const [todos, setTodos] = useState([]);

  const [showTodoForm, setShowTodoForm] = useState(false);

  return (
    <main className="w-screen h-screen dark:bg-black dark:text-white">
      <TodoList todos={todos} />
      {showTodoForm && (
        <CreateTodo
          setTodos={setTodos}
          closeForm={() => setShowTodoForm(false)}
        />
      )}
      <AddTodoBtn handleBtnClick={() => setShowTodoForm(true)} />
    </main>
  );
}
