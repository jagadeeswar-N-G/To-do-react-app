import { useState } from "react";
import React from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

function TodosLogic() {
  const [todos, setTodos] = useState([ ]);
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    console.log("deleted", id);
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <div>
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList
          todosProps={todos}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      </div>
    </div>
  );
}

export default TodosLogic;
