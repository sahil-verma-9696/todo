import { BsThreeDots } from "react-icons/bs";

export default function TodoList({ todos }) {
  return (
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
  );
}
