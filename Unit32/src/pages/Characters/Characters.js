//import {useState, useEffect, useContext} from "react";
//import { useParams } from "react-router-dom";
//import navigationBar from "./components/navigationBar"

${"https://www.anapioficeandfire.com/api/characters"}

[
    {
        "url": "https://www.anapioficeandfire.com/api/characters",
        "name": "",
        "culture": "",
        "born": "",
        "died": "",
        "titles": "",
        "aliases": "",
        "father": "",
        "mother": "",
        "spouse": "",
        "allegiances": []
    }
]

CharacterId= {
    int Id {get; set; }
    string Name {get; set; }
    bool Isfemale {get; set; }
    string Culture {get; set; }
    string[] Titles {get; set; }
    string[] Aliases {get; set; }
    string Born { get; set; }
    string Died { get; set; }
    int? Father { get; set; }
    int? Mother { get; set; }
    int? Spouse { get; set; }
    int[] Allegiances { get; set; }
};

Character() => {
return new Character(
    Id = Id,
    Name = Name,
    IsFemale = IsFemale,
    Born = Born
    Died = Died
    SpouseId = Spouse,
    FatherId = Father,
    MotherId = Mother,
    Culture = Culture,
    Titles = string.Join(';'Titles),
    Aliases = string.Join(';', Aliases),
    AllegiancesIdentifiers = Allegiances
)
};

export default characters;

//Data about Characters