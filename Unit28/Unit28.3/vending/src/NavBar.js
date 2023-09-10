import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className="NavBar">
            <Link to="/" >Home</Link>
            <Link to="/Drink">Drink</Link>
            <Link typeof="/Food">Food</Link>
        </nav>
    );
}

export default NavBar;