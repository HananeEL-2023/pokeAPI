import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Header() {
  const navigate = useNavigate();
  const GoesToHomePage = () => {
    navigate("/Poke");
  };

  return (
    <a className="logo-link" onClick={GoesToHomePage}>
      <img src="/public/pokemon.jpeg" alt="" className="pokemon-logo" />
    </a>
  );
}
