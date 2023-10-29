//import {useState, useEffect, useContext} from "react";
//import { useParams } from "react-router-dom";
import houses from "https://www.anapioficeandfire.com/api/houses";

        int Id { get; set; }
        string Name { get; set; }
        string CoatOfArms { get; set; }
        string[] Titles { get; set; }
        int? CurrentLord { get; set; }
        
        houses()
        {
            return new house()
            {
                Id = Id,
                Name = Name,
                CoatOfArms = CoatOfArms,
                CurrentLordId = CurrentLord,
            };
        }
export default houses;