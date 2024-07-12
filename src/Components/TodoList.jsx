import TodoItem from "./TodoItem";
import style from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodo = todos.slice().sort((a, b) => a.status - b.status);
  return (
    <div className={style.list}>
      {sortedTodo.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
