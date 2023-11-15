import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokeDetails() {
  const params = useParams();

  const [pokemonDet, setPokemonDet] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
      .then((response) => response.json())
      .then((data) => setPokemonDet(data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch pokemon details base on the ID prop
  // https://pokeapi.co/api/v2/pokemon/{id}/

  // Fetch pokemon details base on the ID prop
  // https://pokeapi.co/api/v2/pokemon/{id}/

  return (
    <div>
      <p>{pokemonDet.name}</p>
      <img src={pokemonDet?.sprites?.["back_default"]} alt="" />
    </div>
  );
}
