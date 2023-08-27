import React, {useState} from "react";
import './App.css';

/*Next are imports for components*/
import food from "./food";
import drink from "./drink";


function App() {
  return (
    <main className="App">
    <food/>
    <drink/>
    </main>
  );
}

export default App;
