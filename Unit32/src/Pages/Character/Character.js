import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = () => {
  const [character, setCharacter] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      const response = await axios.get("https://www.anapioficeandfire.com/api/characters/1");
      setCharacter(response.data);
    }

    fetchCharacter();
  }, []);

  const handleNextClick = () => {
    axios.get(nextPageUrl)
      .then(response => {
        setCharacter(Character.concat(response.data));
        setNextPageUrl(response.headers.link.split(',').find(link => link.includes('rel="next"')).split(';')[0].replace('<', '').replace('>', ''));
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.portraitUrl} alt={character.name} />
      <p>{character.aliases}</p>
      <p>{character.culture}</p>
      <p>{character.title}</p>
      <p>{character.gender}</p>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Character;