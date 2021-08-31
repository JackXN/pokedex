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
const [loading, setLoading] = useState(true);



useEffect(() => {
  setLoading(true)
  let cancel;
  // ? Cancel token  takes an a function and returns the cancel token we need
  //? Everytime axios makes a call, its going to set the cancel variable to the new cancel token
axios.get(currentPageUrl, {cancelToken: new axios.CancelToken(c => cancel = c)}).then(res => {
setLoading(false)  
setPokemon(res.data.results.map(p => p.name))
  setNextPageUrl(res.data.next);
  setPrevPageUrl(res.data.previous)
  setPokemon(res.data.results.map(p => p.name))
})

return () =>  cancel()
}, [currentPageUrl])


if(loading) {
  return 'Loading...';
}

// Page Handlers

const gotToNextPage = () => {
  setCurrentPageUrl(nextPageUrl);
}

const goToPreviousPage = () => {
  setCurrentPageUrl([prevPageUrl]);
}



  return (
    <div className="App">
<h1>Pokedex</h1>
<PokemonList pokemon={pokemon}/>
    </div>
  );
}

export default App;
