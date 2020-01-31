import React from "react";
import { useHistory} from 'react-router-dom';

export default function WelcomePage() {
  const history = useHistory();

  const routeToCharacter = () => {
    history.push('/character_list');
  }

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <button onClick={routeToCharacter}>Character's</button>
      </header>
    </section>
  );
}
