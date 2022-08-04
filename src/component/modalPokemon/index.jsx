import React from "react";
import "./style.css";

export default function ModalPokemon({ id, name, types, pTypes, pokeData }) {
  return (
    <div>
      <div className="modalCard">
        <h1>{name}</h1>
        <div className="boxPokemonData">
          <div className={`boxPokemonImage `}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt="cardImag"
              className="cardImag"
            />

            <div className="boxTypePokemon">
              <h2 className={`typePokemonData   ${pTypes[0]}`}>{pTypes[0]}</h2>
              <h2 className={`typePokemonData ${pTypes[1]}`}>{pTypes[1]}</h2>
            </div>
          </div>
          <div className="boxPokemonInfo">
            <h1>National № {id} </h1>
            <h1>Species x</h1>
            <h1>Height x</h1>
            <h1>Weight x</h1>
            <h1>Abilities x</h1>
            <h1>Local № x y z</h1>
          </div>
        </div>
        <div className="boxBaseStats">
          <h1>Status Base</h1>
          Grafico aqui
        </div>
        <div className="boxTraining">
          <h1>Treinamento</h1>
        </div>
        <div className="boxBreeding">
          <h1>Criação</h1>
        </div>
      </div>
    </div>
    // <div className="ModalCard">
    //   <h1>{name}</h1>
    //   <div className="boxPokemonData">
    //     <div className={`boxPokemonImage ${types[0].type.name}`}>
    //       <img
    //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
    //         alt={name}
    //         className="cardImag"
    //       />
    //       {pTypes[1] ? (
    //         <div className="boxTypePokemon">
    //           <h2 className={`typePokemon   ${pTypes[0]}`}>{pTypes[0]}</h2>
    //           <h2 className={`typePokemon ${pTypes[1]}`}>{pTypes[1]}</h2>
    //         </div>
    //       ) : (
    //         <div className="boxTypePokemon">
    //           <h2 className={`typePokemon ${pTypes[0]}`}>{pTypes[0]}</h2>
    //         </div>
    //       )}
    //     </div>
    //     <div className="boxPokemonInfo">
    //       <h1>National № {id}</h1>
    //       <h1>Species x</h1>
    //       <h1>Height x</h1>
    //       <h1>Weight x</h1>
    //       <h1>Abilities x</h1>
    //       <h1>Local № x y z</h1>
    //     </div>
    //   </div>
    //   <div className="boxBaseStats">
    //     <h1>Status Base</h1>
    //   </div>
    //   <div className="boxTraining">
    //     <h1>Treinamento</h1>
    //   </div>
    //   <div className="boxBreeding">
    //     <h1>Criação</h1>
    //   </div>
    // </div>
  );
}
