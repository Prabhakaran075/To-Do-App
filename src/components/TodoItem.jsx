import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between bg-white p-4 mb-2 rounded-md shadow">
      <span className="text-lg">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
      <MdDelete />
      </button>
    </li>
  );
};

export default TodoItem;
