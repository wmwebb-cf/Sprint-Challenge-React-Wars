import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';



const Wrapper = styled.section`
  width: 200px;
  padding: 20px;
  margin: 0 auto 20px;
  background: papayawhip;
`;

function StarWarsCard () {

  const [newCard, setNewCard] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(response => {
      setNewCard(response.data.results);
    });
  }, []);

  return newCard.map( item => {
    return (
      <Wrapper>
        <Card>
          <CardBody>
            <h3><CardTitle>Name: {item.name}</CardTitle></h3>
            <CardText>Gender: {item.gender}</CardText>
            <CardText>Height: {item.height}</CardText>
            <CardText>Mass: {item.mass}</CardText>
          </CardBody>
        </Card>
      </Wrapper>
    );
  })


}

export default StarWarsCard;
