import TodoList from "./components/TodoList";
import AddTodoBtn from "./components/ui/Button";
import CreateTodo from "./components/form/CreateTodo";
import { useState } from "react";

export default function App() {
  // function mapToTODO()

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Do homework",
      description: "I have to complete my school homework before Monday.",
    },
    {
      id: 2,
      title: "Buy groceries",
      description: "Need to buy milk, bread, and eggs from the supermarket.",
    },
    {
      id: 3,
      title: "Workout",
      description: "Go for a 30-minute run and do strength training.",
    },
    {
      id: 4,
      title: "Read a book",
      description: "Read at least 50 pages of 'Atomic Habits'.",
    },
    {
      id: 5,
      title: "Call parents",
      description: "Catch up with mom and dad on a video call.",
    },
    {
      id: 6,
      title: "Finish project",
      description: "Complete the frontend for the Hackathon Collaboration Hub.",
    },
    {
      id: 7,
      title: "Plan weekend trip",
      description: "Research places and make a plan for the weekend getaway.",
    },
    {
      id: 8,
      title: "Clean room",
      description: "Organize the desk and vacuum the floor.",
    },
    {
      id: 9,
      title: "Learn TypeScript",
      description: "Go through TypeScript docs and convert a JS project to TS.",
    },
    {
      id: 10,
      title: "Write blog post",
      description: "Draft a blog about my recent coding contest experience.",
    },
  ]);

  return (
    <main className="w-screen h-screen dark:bg-black dark:text-white">
      <TodoList todos={todos} />
      <CreateTodo setTodos={setTodos} />
      <AddTodoBtn />
    </main>
  );
}
