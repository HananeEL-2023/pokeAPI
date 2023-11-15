import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Poke() {
  const [result, setResult] = useState({});
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
        const promises = result.results.map((poke) => {
          return fetch(poke.url).then((pokeResponse) => pokeResponse.json());
        });
        return Promise.all(promises);
      })
      .then((pokemonDetails) => {
        setPokemonData(pokemonDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    pokemonData &&
    pokemonData.map((poke, index) => (
      <div key={index}>
        <Link to={`/PokeDetails/${poke.id}`}>
          <p>{poke.name}</p>
          <img src={poke.sprites.back_default} alt="" />
        </Link>
      </div>
    ))
  );
}
