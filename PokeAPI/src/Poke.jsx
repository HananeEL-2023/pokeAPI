import { useState, useEffect } from "react";

export default function Poke() {
  const [result, setResult] = useState({});
  const [pokemonData, setPokemonData] = useState([]);

  const fetchData = () => {
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
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(pokemonData);
  return (
    pokemonData &&
    pokemonData.map((poke) => (
      <div key="pokeKey">
        <a href="">
          <p>{poke.name}</p>
          <img src={poke.sprites.back_default} alt="" />
        </a>
      </div>
    ))
  );
}
