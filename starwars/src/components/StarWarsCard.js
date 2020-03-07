import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsContent from './StarWarsContent.js';



function StarWarsCard () {

  const [newCard, setNewCard] = useState([]);


  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(response => {
      // setNewImage(response.data);
      console.log(response.data.results);
    });
  }, []);


  return null;
}

export default StarWarsCard;
