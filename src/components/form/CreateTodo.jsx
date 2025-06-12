import { useState } from "react";

export default function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: `todo-${new Date().toISOString()}`,
      title,
      description,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div className="fixed top-0 w-screen h-screen  flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="dark:bg-[#131416] shadow-md flex flex-col gap-6 p-4 rounded-lg w-80"
      >
        <h2 className="text-center text-xl">Create TODO</h2>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="dark:bg-[#0f0f0f] p-2 rounded-md"
          type="text"
          name="title"
          placeholder="Enter TODO Title *"
          required
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="dark:bg-[#0f0f0f] p-2 rounded-md h-50"
          name="description"
          placeholder="Enter TODO Description"
        ></textarea>
        <div className="flex justify-end gap-4">
          <button className="bg-red-500 p-2 rounded-lg" type="button">
            Close
          </button>
          <button className="bg-green-500 p-2 rounded-lg" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
