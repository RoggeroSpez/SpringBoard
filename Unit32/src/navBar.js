import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className="NavBar">
            <Link to="/" >Home</Link>
            <Link to="/characters">Characters</Link>
            <Link typeof="/houses">Houses</Link>
        </nav>
    );
}

export default NavBar;