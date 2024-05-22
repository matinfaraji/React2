

// import React from 'react';
import Called from './components/called'
import Alert from './components/Alert';
import Card from './components/card';
import RenderList from './components/RenderList';
import ShowPlanets from './components/ShowPlanets';
import Pokedex from './components/Pokedex';

// card
const data = {
  image: '../../.learn/assets/Dylan.png?raw=true',
  cardTitle: 'Bob Dylan',
  cardDescription:
    'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  button: {
    url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    label: 'Go to Wikipedia',
  },
};

// render list
const animals = [
  { label: 'Horse' },
  { label: 'Turtle' },
  { label: 'Elephant' },
  { label: 'Monkey' },
];

// showplanets
const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

// pokedex
const pokemonData = {
  pokemon: [
    {
      id: 1,
      name: 'Charmander',
      type: 'fire',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 2,
      name: 'Squirtle',
      type: 'water',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 3,
      name: 'Butterfree',
      type: 'flying',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      id: 4,
      name: 'Rattata',
      type: 'normal',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      id: 5,
      name: 'Metapod',
      type: 'bug',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
  ],
};
// information
const customer = {
  first_name: 'Bob',
  last_name: 'Dylan',
};


function App() {
  return (
    <div>
      <h1>My name is {customer.first_name}</h1>
      <h2>My last name is {customer.last_name}</h2>
      <Called/>
      <Alert message={"OMG! Something really bad has happened!"} />
      <Card data={data} />
      <RenderList animals={animals} />
      <ShowPlanets planets={planets} />
      <Pokedex pokemon={pokemonData.pokemon} />
    </div>
  );
}

export default App;