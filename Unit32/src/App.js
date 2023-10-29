import {BrowserRouter} from "react-router-dom";
import styles from "./app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function app() {
  return (<>
    {
      <BrowserRouter>
      <div className={styles["app"]}>
      <header className={styles["app__header"]}>
      <navigationBar/>
      </header>
      <main className={styles["app__main"]}>
      </main>
      <footer className={styles["app__footer"]}>
      <pagination/>
      </footer>
      </div>
    </BrowserRouter>
    }
    </>
  );
}

export default app;