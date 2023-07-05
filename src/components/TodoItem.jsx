import React from "react";
import { ReactComponent as Delete } from "../assets/delete.svg";

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <div className="flex justify-between border items-center m-3 shadow-lg rounded-md">
      {
        <li id={itemProp.id} className="flex">
          <button
            className="bg-black w-[70px] text-white items-center text-center rounded-l-md uppercase"
            onClick={() => handleChange(itemProp.id)}
          >
            {itemProp.completed ? " not done" : "done"}
          </button>

          <p
            contentEditable={true}
            className={`focus:outline-none p-2 py-3 text-xl font-medium text-gray-7001 ${
              itemProp.completed ? "line-through" : ""
            }`}
          >
            {itemProp.title}
          </p>
        </li>
      }
      <section>
        <button
          onClick={() => delTodo(itemProp.id)}
          className=" text-white px-2 py-1 rounded"
        >
          <Delete height={30} width={30} />
        </button>
      </section>
    </div>
  );
};
export default TodoItem;
