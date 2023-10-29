import styles from "./Home.module.css";
function Home ()
{
  return (
    <>
    <navigationBar/>
    <section className={styles["Body"]}>
      <section className={styles["section__container"]}>
        <h1>Welcome to the world created by George R.R. Martin</h1>
      </section>
      <section className={styles["section__container"]}>
        <h2>Learn about your Favorite Game of Thrones Character</h2>
        <p>In this program you will be able to learn about the characters from the Game of thrones universe related to the box set of "A Song of Ice and Fire</p>
      </section>
      <section className={styles["section__container"]}>
        <h2>Learn about the Houses</h2>
        <p>Within Westeros and Essos there are many factions from Nobility to Royalty</p>
      </section>
      </section>
    </>
  );
}
export default Home;