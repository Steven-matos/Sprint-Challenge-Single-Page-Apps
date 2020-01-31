import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log('This is my characters array: ',res.data.results)
      setCharacter(res.data.results);
    })
    .catch(err => {
      console.error("You are getting an error of: ", err); 
    })
  }, []);

  return (
    <section className="character-list">
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
