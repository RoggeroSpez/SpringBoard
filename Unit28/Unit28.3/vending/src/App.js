/*import React, {useState} from "react";*/
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

/*Next are imports for components*/
import Home from "./Home";
import Food from "./Food";
import Drink from "./Drink";
import NavBar from "./NavBar";
function App(){
/* const [page, setPage] = useState('home');
 const showPage = () => {
if (page === 'Home') return <Home/>
if (page === 'Food') return <Food/>
if (page === 'Drink') return <Drink/>
 }*/
 return (
  <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Food" element={<Food/>}/>
<Route path="/Drink" element={<Drink/>}/>   
    </Routes>
    </BrowserRouter>
  </div>
 );
 }
export default App;