import React from "react";
import { Link, Route} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/character_list">Character's</Link>
      </nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character_list" component={CharacterList} />
    </header>
  );
}
