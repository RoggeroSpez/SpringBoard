import {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import navegationBar from "./components/nagationBar";
import characters from "http://anapioficeandfire.com/api/characters/"

const characters = () => {
return(
    <div className="characters-container">
        <nagationBar/>
        
    </div>
)
};

export default characters;