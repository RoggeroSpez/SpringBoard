import {Routes, Route, Navigate} from "react-router-dom";

import Home from "../pages/Home/Home";
import House from "../pages/House";
import Characters from "../pages/Characters";
import Character from "../pages/Character";

function AppRoute ()
{
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/House" element={<House/>}/>
    <Route path="/Characters" element={<Characters/>}/>
    <Route path="/Character/:id" element={<Character />}/>
    <Route path="*" element={<Navigate to={"/"} />}/>
    </Routes>
  );
}

export default AppRoute;