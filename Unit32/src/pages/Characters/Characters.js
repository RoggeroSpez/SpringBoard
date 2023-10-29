import {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import navigationBar from "./components/navigationBar";
import characters from "http://anapioficeandfire.com/api/characters/"

const characters(character) {
return(
    <div className="characters-container">
        <navigationBar/>
        <ol>
        <li>"Name": "[character.name]";,</li>
        <li>"Aliases" "[character.alias]";</li>
        <li>"Culture": "[.culture]";</li>
        <li>"Gender": "gender/img";</li>
        </ol>
    </div>
)
};

export default characters;

//Data about Characters