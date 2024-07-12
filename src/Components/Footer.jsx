import style from "./footer.module.css";
export default function Footer({ completedtodo, totaltodo }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed: {completedtodo}</span>
      <span className={style.item}>Total Todo: {totaltodo}</span>
    </div>
  );
}
