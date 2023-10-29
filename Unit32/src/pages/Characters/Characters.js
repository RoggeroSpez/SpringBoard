//import {useState, useEffect, useContext} from "react";
//import { useParams } from "react-router-dom";
//import navigationBar from "./components/navigationBar";
import characters from "http://anapioficeandfire.com/api/characters/"

characters = (c) => {
return(
    <div className="characters-container">
        <navigationBar/>
        <ol>
        <li>"Name": "[c.name]";,</li>
        <li>"Aliases" "[c.alias]";</li>
        <li>"Culture": "[c.culture]";</li>
        <li>"Gender": "gender/img";</li>
        </ol>
    </div>
)
};

export default characters;

//Data about Characters