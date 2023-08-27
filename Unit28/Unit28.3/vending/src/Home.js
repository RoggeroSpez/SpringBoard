import React from "react";
import { Link } from "react-router-dom";
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