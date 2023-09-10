import React from "react";
import { Link } from "react-router-dom";
/*Next are imports for components*/
function Home(){
return(
    <div className="Home">
      <ol>
        <li><Link to="/Food">Food</Link></li>
        <li><Link to="/Drink">Drink</Link></li>
      </ol>
  </div>
);
}

export default Home;