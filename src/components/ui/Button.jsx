import { FaPlus } from "react-icons/fa6";

export default function AddTodoBtn({ handleBtnClick }) {
  return (
    <button
      onClick={handleBtnClick}
      className="fixed bottom-0 right-0 m-10 cursor-pointer size-25 dark:bg-[#131416] flex justify-center items-center rounded-full"
    >
      <FaPlus size={36} />
    </button>
  );
}
