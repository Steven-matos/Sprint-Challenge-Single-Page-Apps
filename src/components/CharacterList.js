import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [character, setCharacter] = useState([])

  const [query, setQuery] = useState('')

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log('This is my characters array: ',res.data.results)

      const characters = res.data.results.filter(character => 
        character.name.toLowerCase().includes(query.toLowerCase())
        );

      setCharacter(characters);
    })
    .catch(err => {
      console.error("You are getting an error of: ", err); 
    })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  return (
    <section className="character-list">
    <SearchForm 
      handleInputChange={handleInputChange}
      query={query}
    />
      <h2>Character's</h2>
      <Container className="themed-container" fluid="sm">
        <Row xs="3">
          {character.map(data => {
            return (
              <CharacterCard 
                key={data.id}
                name={data.name}
                gender={data.gender}
                image={data.image}
                status={data.status}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
