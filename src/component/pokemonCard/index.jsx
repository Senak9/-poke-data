import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPokemon from "../modalPokemon";

export default function PokemonCard({ id, name, types, pTypes, pokeData }) {
  const [showModalPokemon, setShowModalPokemon] = useState(false);

  function handleOpenModalPokemon() {
    console.log(showModalPokemon);
    setShowModalPokemon(true);
  }

  function handleCloseModalPokemon() {
    setShowModalPokemon(false);
  }
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div className={`card`}>
      <div className={`boxImage ${types[0].type.name}`}>
        {/* <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          className="cardImag"
        /> */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
          className="cardImag"
        />
      </div>
      <h1>
        {id} {name}
      </h1>

      {pTypes[1] ? (
        <div className="boxTypePokemon">
          <h2 className={`typePokemon   ${pTypes[0]}`}>{pTypes[0]}</h2>
          <h2 className={`typePokemon ${pTypes[1]}`}>{pTypes[1]}</h2>
        </div>
      ) : (
        <div className="boxTypePokemon">
          <h2 className={`typePokemon ${pTypes[0]}`}>{pTypes[0]}</h2>
        </div>
      )}
      {/* <h2 className={`typePokemon ${pTypes[0]}`}>{pTypes[0]}</h2>
                <h2 className={`typePokemon ${pTypes[1]}`}>{pTypes[1]}</h2> */}
      {showModalPokemon && (
        <ModalPokemon
          id={id}
          name={name}
          types={types}
          pTypes={pTypes}
          pokeData={pokeData}
          handleOpenModalPokemon={handleOpenModalPokemon}
          handleCloseModalPokemon={handleCloseModalPokemon}
        />
      )}
    </div>
  );
}
