import React from "react";
import {Link} from "react-router-dom";
import "./navBar.css";

function NavBar(){
    return(
        <nav className="NavBar">
            <Link to="/" >  Home  </Link>
            <Link to="/Character">  Character  </Link>
            <Link to="/Houses">  Houses  </Link>
        </nav>
    );
}

export default NavBar;