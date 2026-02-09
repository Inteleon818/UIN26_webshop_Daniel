import { Link } from "react-router-dom";

export default function Nav() {
    /*"Link to" brukes isteden for "a href" for å bytte mellom rutekomponenter isteden for å bytte HTML-dokumenter.*/
    return (
      <nav>
        <Link to="city">City</Link>
        <Link to="ninjago">Ninjago</Link>
        <Link to="castles-and-knights">Castles and Knights</Link>
        <Link to="marine-and-pirates">Marine and Pirates</Link>
        <Link to="movie-characters">Movie characters</Link>
      </nav>
    )
}

