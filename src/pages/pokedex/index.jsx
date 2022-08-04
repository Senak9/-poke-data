import React from "react";
import Header from "../../component/header";
import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPokemon from "../../component/modalPokemon";
import api from "../../api/api";
import PokemonCard from "../../component/pokemonCard";

export default function Pokedex() {
  const [pokemonsList, setPokemonsList] = useState([]);

  const getPokemonUrl = async (id) => {
    const response = await api.get(`/pokemon/${id}`);
    return response.data;
  };

  const listPokemon = async () => {
    const list = [];
    for (let i = 1; i <= 905; i++) {
      const pokemon = await getPokemonUrl(i);
      list.push(pokemon);
    }

    setPokemonsList(list);
  };

  listPokemon();

  return (
    <div className="containerPokedex">
      <Header />
      <div className="boxPokedex">
        <h1>Pokedex Kanto</h1>
        <div className="bodyPokedex">
          {pokemonsList &&
            pokemonsList.map((pokemon) => {
              return (
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  pTypes={pokemon.types.map((typeInfo) => typeInfo.type.name)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
