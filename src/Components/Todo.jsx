import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedtodo = todos.filter((todo) => todo.status).length;
  const totaltodo = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedtodo={completedtodo} totaltodo={totaltodo} />
    </div>
  );
}
