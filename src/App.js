/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css';
import React, {useState, useEffect} from 'react';
import PokemonList from './components/PokemonList';
// import PokemonDetail from './components/PokemonDetail';
import axios from 'axios';

function App() {
const [pokemon,setPokemon] = useState([]);
const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
const [nextPageUrl, setNextPageUrl] = useState();
const [prevPageUrl, setPrevPageUrl] = useState();



useEffect(() => {
axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
  setPokemon(res.data.results.map(p => p.name))
  setNextPageUrl(res.data.next);
  setPrevPageUrl(res.data.previous)
  setPokemon(res.data.results.map(p => p.name))
})

}, [currentPageUrl])



  return (
    <div className="App">
<h1>Pokedex</h1>
<PokemonList pokemon={pokemon}/>
    </div>
  );
}

export default App;
