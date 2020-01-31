import React from "react";
import { Link, Route} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import styled from 'styled-components';

const Nav = styled.nav `
  display: flex;
  justify-content: space-around;
  align-content: center;
  background: #3d85c6;
  margin: -1rem -1rem 2.5rem -1rem;
  padding: 1.5rem;
`;

const Links = styled(Link) `
  color: black;
  background: white;
  padding: .5rem 1.5rem; 
  font-size: 1.3rem;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    color: tomato;
    text-decoration: none;    
    border: 1px solid tomato;
  }
`;

export default function Header() {
  return (
    <header className="ui centered">
      <Nav>
        <Links to="/">Home</Links>
        <Links to="/character_list">Character List</Links>
      </Nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character_list" component={CharacterList} />
    </header>
  );
}
