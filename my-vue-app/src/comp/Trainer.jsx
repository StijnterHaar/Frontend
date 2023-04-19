import React from "react";
import { Link } from "react-router-dom";

const Trainer = ({}) => {
  // Dummy Pokemon data for demonstration
  const pokemon = {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    abilities: ["Static", "Thunderbolt", "Quick Attack"],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8">
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="w-48 h-48 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-center mb-4">{pokemon.name}</h1>
        <p className="text-gray-600 text-center mb-4">{pokemon.type} Type</p>
        <div className="flex justify-center mb-6">
          {pokemon.abilities.map((ability, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-600 py-2 px-4 rounded-full mr-2"
            >
              {ability}
            </span>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-center block w-full"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
