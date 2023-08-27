import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

/*Next are imports for components*/
import Navbar from"./NavBar";
import home from "./home";
import food from "./Food";
import drink from "./Drink";


function App(){
 const [page, setPage] = useState('home');
 const showPage = () => {
if (page === 'Home') return <Home/>
if (page === 'Food') return <Food/>
if (page === 'Drink') return <Drink/>
 }
 return (
  <div className="App">
    <BrowserRouter>
    <NavBar/>
    <Routes>
<Route path="/Home" element={<Home/>}/>
<Route path="/Food" element={<Food/>}/>
<Route path="/Drink" element={<Drink/>}/>      
    </Routes>
    </BrowserRouter>

  </div>
 );
}

export default App;