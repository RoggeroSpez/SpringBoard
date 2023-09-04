import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function NavBar(){
    return(
        <nav className="NavBar">
            <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Food" element={<Food/>}/>
                <Route path="/Drink" element={<Food/>}/>
            </Routes>
            </BrowserRouter>
        </nav>
    );
}

export default NavBar;