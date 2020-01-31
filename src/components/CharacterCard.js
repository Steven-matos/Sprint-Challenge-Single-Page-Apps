import React from 'react';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap'
import styled from 'styled-components';

const Cards = styled(Card) `
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  border: 1px solid black;
  margin: 1rem;
`;

const CharacterCard = (prop) => {
  return (
    <Col>
      <Cards>
        <CardImg top width="100%" src={prop.image} alt={prop.name} />
        <CardBody>
          <CardTitle>{prop.name}</CardTitle>
          <CardSubtitle>Status: {prop.status}</CardSubtitle>
          <CardText>Gender: {prop.gender}</CardText>
        </CardBody>
      </Cards>
    </Col>
  );
};

export default CharacterCard;