import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import pagination from "./components/pagination/pagination";
import NavigationBar from "./components/NavigationBar";
import characters from "./pages/characters";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function app() {
  return (<>
    {
      <BrowserRouter>
      <div className={styles["app"]}>
      <header className={styles["app__header"]}>
      <NavigationBar/>
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