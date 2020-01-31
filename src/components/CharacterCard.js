import React from 'react';
import styled from 'styled-components';

const CharacterCard = (prop) => {
  return (
    <div>
      <h3>{prop.name}</h3>
      <img src={prop.image} alt={prop.name}/>
      <p>{prop.gender}</p>
      <p>{prop.status}</p>
    </div>
  );
};

export default CharacterCard;