import React from "react";
import { useHistory} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button `
  background:    #3d85c6;
  border:        1px solid #000000;
  border-radius: 5px;
  box-shadow:    1px 1px #000000;
  padding:       8px 20px;
  color:         #ffffff;
  display:       inline-block;
  font:          normal bold 24px/1 "Calibri", sans-serif;
  text-align:    center;
  text-shadow:   1px 1px #000000;
  margin: 2rem 25.5rem;
  &:focus {
    outline: none;
  }
  &:active {
    color: #3d85c6;
    background: #ffffff;
    border: 1px solid #3d85c6;
  }
`;


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
        <Button onClick={routeToCharacter}>Character's</Button>
      </header>
    </section>
  );
}
