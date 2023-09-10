/*import React, {useState} from "react";*/
/*import {BrowserRouter, Route, Routes, Link} from "react-router-dom";/*
import './App.css';
/*Next are imports for components*/
import Home from "./Home";
import Food from "./Food";
import Drink from "./Drink";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Food" element={<Food />} />
          <Route path="/Drink" element={<Drink />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;