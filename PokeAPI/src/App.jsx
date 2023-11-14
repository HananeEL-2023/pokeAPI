import { useState, useEffect } from "react";

export default function App() {
  const [result, setResult] = useState({});

  const fetchData = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    result.results &&
    result.results.map((poke) => <div key="index">{poke.name}</div>)
  );
}
