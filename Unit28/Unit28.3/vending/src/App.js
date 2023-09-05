/*import React, {useState} from "react";*/
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import './App.css';
/*Next are imports for components*/
import Home from "/Home";
import Food from "/Food";
import Drink from "/Drink";
import NavBar from "/NavBar";
function App(){
 return (
  <div className="App">
<NavBar/>
  </div>
 );
 }
export default App;