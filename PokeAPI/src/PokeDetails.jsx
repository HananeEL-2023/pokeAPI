import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function PokeDetails() {
  const params = useParams();

  const [pokemonDet, setPokemonDet] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
      .then((response) => response.json())
      .then((data) => setPokemonDet(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <p>{pokemonDet.name}</p>
      <img src={pokemonDet?.sprites?.["back_default"]} alt="" />
      <p>Weight : {pokemonDet.weight}Kg</p>
      <p>Height : {pokemonDet.height}</p>

      <h2>Abilities : </h2>
      {pokemonDet?.abilities?.map((ability, index) => (
        <p key={index}> {ability.ability.name}</p>
      ))}
    </div>
  );
}
