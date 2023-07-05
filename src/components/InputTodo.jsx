import React from "react";
import { useState } from "react";

function InputTodo({ addTodoItem }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add an item.");
    }
  };
  return (
    <>
      <section className="border-2 p-1 m-3 rounded-md border-black">
        <form onSubmit={handleSubmit} className="flex justify-between">
          <input
            type="text"
            placeholder="Add Your Task"
            value={title}
            onChange={handleChange}
            className="p-2 pl-6 outline-none w-full font-medium text-lg "
          />
          <button className=" uppercase bg-transparent hover:bg-black text-black font-semibold hover:text-white px-6 border border-black hover:border-transparent rounded">
            ADD
          </button>
        </form>
        <span className="text-gray-700 font-medium">{message}</span>
      </section>
    </>
  );
}

export default InputTodo;
