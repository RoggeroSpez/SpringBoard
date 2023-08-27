import React from "react";
import { Link } from "react-router-dom";
/*Next are imports for components*/
import Home from "./Home";
import Food from "./Food";
import Drink from "./Drink";
import NavBar from "./NavBar";
function Home(){
return(
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Food" element={<Food/>}/>
<Route path="/Drink" element={<Drink/>}/>   
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default Home;