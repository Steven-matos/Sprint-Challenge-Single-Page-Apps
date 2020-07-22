import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const Title = styled.h2 `
  text-align: center;
  border-top: 1px solid black;
  padding-top: 2.5rem;
`;

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
      <Title>Characters</Title>
      <SearchForm
        handleInputChange={handleInputChange}
        query={query}
      />
      <Container className="themed-container" fluid={true}>
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
