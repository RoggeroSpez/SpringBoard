import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className="NavBar">
            <Link to="/" >Home</Link>
            <Link to="/Characters">Characters</Link>
            <Link typeof="/Housesa">Houses</Link>
        </nav>
    );
}

export default NavBar;