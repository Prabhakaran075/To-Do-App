import React from "react";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul className="w-full max-w-lg">
      {todos.map((todo) => (
        <li key={todo.id} className="bg-white p-4 mb-2 rounded-md shadow flex justify-between items-center">
          <span>{todo.text}</span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md"
          >
            <MdDelete />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
