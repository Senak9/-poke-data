import React from "react";
import Header from "../../component/header";
import CardType from "../../component/cardType";
import "./style.css";
import PokemonHome from "../../assets/pokemonHome.svg";
import ModalPokemon from "../../component/modalPokemon";
export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="boxHome">
        <div className="boxCard">
          <CardType status="pokedex" /> <CardType status="evolution" />
          <CardType status="moves" /> <CardType status="locations" />
        </div>
        <div className="boxPokemon">
          <img src={PokemonHome} alt="PokemonHome" className="pokemonHome" />
        </div>
      </div>
    </div>
  );
}
