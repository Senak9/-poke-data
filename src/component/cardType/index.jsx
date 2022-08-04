import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CardType({ status }) {
  const navigate = useNavigate();

  return (
    <div
      className={
        status === "pokedex"
          ? "pokedexBox containerCardType"
          : status === "moves"
          ? "movesBox containerCardType"
          : status === "evolution"
          ? "evolutionBox containerCardType"
          : "locationsBox containerCardType"
      }
      onClick={() => {
        navigate(status === "pokedex" ? "/pokedex" : "/");
      }}
    >
      <h1>
        {status === "pokedex"
          ? "Pokedex"
          : status === "moves"
          ? "Moves"
          : status === "evolution"
          ? "Evolution"
          : "Locations"}
      </h1>
    </div>
  );
}
