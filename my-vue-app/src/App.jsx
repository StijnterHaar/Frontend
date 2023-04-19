import { useEffect, useState } from "react";
import "./App.css";
import Trainer from "./comp/Trainer";




const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      );
      const data = await response.json();
      const pokemonList = data.results;
      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemons(pokemonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const filteredPokemons = pokemons
    .filter((pokemon) => {
      if (filterType === "") return true;
      return pokemon.types.some((type) => type.type.name === filterType);
    })
    .filter((pokemon) => {
      if (searchTerm === "") return true;
      return pokemon.name.includes(searchTerm.toLowerCase());
    });

  return (
    <div className="Pokedex p-4 flex justify-center h-screen">

      <div className="max-w-3xl ">
        <h1 className="text-3xl font-bold flex justify-center mb-5">Pokedex</h1>
        <div className="flex justify-center	mb-4 ">
          <input
            type="text"
            className="px-2 py-1 rounded border"
            placeholder="Search Pokemon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-2 py-1 rounded border"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="flying">Flying</option>
          </select>
        </div>
        <div className="flex flex-col overflow-y-scroll h-4/6	border-b-4  border-t-4 border-indigo-4 w-full">
          {filteredPokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="flex items-center p-4 border-b-2 border-indigo-4"
            >
              <img
                className="w-100"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <div className="flex flex-col">
                <b>{pokemon.name}</b>
                <b>#{pokemon.id}</b>
              </div>
              <ul className="flex justify-center gap-4">
                {pokemon.types.map((type, index) => (
                  <li key={index}>{type.type.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default App;
