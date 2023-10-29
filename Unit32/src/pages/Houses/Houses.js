import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await axios.get('https://anapioficeandfire.com/api/houses');
      setHouses(response.data);
    };

    fetchHouses();
  }, []);

  return (
    <ul>
      {houses.map(house => (
        <li key={house.url}>
          {house.name}
        </li>
      ))}
    </ul>
  );
};

export default Houses;

//        int Id { get; set; }
//        string Name { get; set; }
//        string CoatOfArms { get; set; }
//        string[] Titles { get; set; }
//        int? CurrentLord { get; set; }
//        
//        houses()
//        {
//            return new house()
//            {
//                Id = Id,
//                Name = Name,
//                CoatOfArms = CoatOfArms,
//                CurrentLordId = CurrentLord,
//            };
//        }
//export default houses;