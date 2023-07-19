import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let hand1 = [];
  let hand2 = [...props.pokemon];

  while (hand1.length < hand2.length) {
    // take a random pokemon from hand 2, add it to hand 1
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 143, name: "Snorlax", type: "normaal", base_experience: 154 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 267, name: "Beautifly", type: "bug/flying", base_experience: 161 },
    { id: 12, name: "Butterfree", type: "bug/flying", base_experience: 178 },
    { id: 82, name: "Magneton", type: "electric/steel", base_experience: 161 },
    { id: 65, name: "Alakazam", type: "psychic", base_experience: 186 },
    { id: 23, name: "Ekans", type: "poison", base_experience: 62 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ]
};

export default Pokegame;
