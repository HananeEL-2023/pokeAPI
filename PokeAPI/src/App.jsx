import Poke from "./Poke";
import PokeDetails from "./PokeDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PokeDetails" element={<PokeDetails />} />
        <Route path="/Poke" element={<Poke />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
