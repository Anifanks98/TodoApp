import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", status: false });
  function formSubmit(e) {
    e.preventDefault();
    if (todo.name === "") {
      alert("Please enter a Task to Add.");
    } else if (todos.some((existingTodo) => existingTodo.name === todo.name)) {
      alert("This Task already exists.");
    } else {
      setTodos([...todos, todo]);
      setTodo({ name: "", status: false }); //emptying the input field after pressing add
    }
  }
  return (
    <form className={style.todoform} onSubmit={formSubmit}>
      <div className={style.inputcontainer}>
        <input
          className={style.moderninput}
          onChange={(e) => setTodo({ name: e.target.value, status: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Task..."
        />
        <button className={style.modernbutton} type="submit">
          +Add
        </button>
      </div>
    </form>
  );
}
