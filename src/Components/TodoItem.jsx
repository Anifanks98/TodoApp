import style from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(item) {
    console.log("clicked delete", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleCheck(name) {
    const newTodo = todos.map((todo) =>
      todo.name === name ? { ...todo, status: !todo.status } : todo
    );
    setTodos(newTodo);
  }
  const isComplete = item.status ? style.completed : style.notCompleted; //classname of the span

  return (
    <div>
      <div className={style.item}>
        <div className={style.itemName}>
          <span className={isComplete} onClick={() => handleCheck(item.name)}>
            {item.name}
          </span>
          <span>
            <button onClick={() => handleClick(item)} className={style.xbutton}>
              x
            </button>
          </span>
        </div>

        <hr className={style.line} />
      </div>
    </div>
  );
}
