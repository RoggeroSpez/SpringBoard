import styles from "./Motto.module.css";

function Motto ()
{
  return (
    <div className={styles["motto"]}>
      <span className={styles["motto__text"]}>In A Galaxy Far Far Away</span>
      <span className={styles["motto__emojis"]}>🌎🚀🧑‍🚀🪐</span>
    </div>
  );
}
export default Motto;