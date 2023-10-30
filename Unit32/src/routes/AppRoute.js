import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home";
import House from "./House";
import Characters from "./Characters";
import Character from "./Character";

function AppRoute ()
{
  return (
    <Routes>
    <Route path="../Pages/Home/" element={<Home/>}/>
    <Route path="../Pages/House" element={<House/>}/>
    <Route path="../Pages/Characters" element={<Characters/>}/>
    <Route path="../Pages/Character/:id" element={<Character />}/>
    <Route path="*" element={<Navigate to={"/"} />}/>
    </Routes>
  );
}

export default AppRoute;