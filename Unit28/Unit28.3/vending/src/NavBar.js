import React from "react";
import {Link} from "react-router-dom"

function NavBar(){
    return(
        <nav className="NavBar">
<link to ="/Home">Home</link>
<link to ="/Food">Food</link>
<link to ="/Drink">Drink</link>            
        </nav>
    );
}

export default NavBar;