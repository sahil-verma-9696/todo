import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { todos } from "./data/dummy";

export default function App() {
  // function mapToTODO()
  return (
    <main className="w-screen h-screen dark:bg-black dark:text-white">
      {/* TODOS */}
      <section className="w-fit m-auto flex flex-col gap-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="dark:bg-[#131416] w-100 p-2 relative rounded-lg "
          >
            <BsThreeDots className="absolute top-0 right-0 m-2" />
            <h3 className="text-3xl">{todo.title}</h3>
            <p className="text-sm opacity-40">{todo.description}</p>
          </div>
        ))}
      </section>

      {/* Add Todo btn */}
      <button className="fixed bottom-0 right-0 m-10 cursor-pointer size-25 dark:bg-[#131416] flex justify-center items-center rounded-full">
        <FaPlus size={36} />
      </button>
    </main>
  );
}
