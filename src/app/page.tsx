import React from "react";
import TodoForm from "./_components/TodoForm";

export default async function Index() {
  const result = await fetch("http://localhost:3000/api/todo");
  const todoList: { id: string; message: string }[] = await result.json();

  return (
    <>
      <h1 className="text-2xl font-bold"> Todos</h1>
      <TodoForm />
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.message}</li>
        ))}
      </ul>
    </>
  );
}
