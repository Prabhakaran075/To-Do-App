import React, { useState } from "react";

const TodoForm = ({ addTodo, saveTodos, todos }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      addTodo(input);
      setInput(""); // Clear input field after adding
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 mb-6">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex gap-2">
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Add
        </button>
        <button
          onClick={saveTodos}
          className={`bg-green-500 text-white px-4 py-2 rounded-md ${
            todos.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={todos.length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
