import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage when the page loads
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
    setTodos(savedTodos);
  }, []);

  // Add new todo (not saved yet)
  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  // Delete a todo from the list (not saved yet)
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Save the current list to localStorage
  const saveTodos = () => {
    localStorage.setItem("todoList", JSON.stringify(todos));
    alert("Task Completed!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">To-Do App</h1>
      <TodoForm addTodo={addTodo} saveTodos={saveTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
