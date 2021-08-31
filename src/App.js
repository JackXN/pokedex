/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css';
import React, {useState, useEffect} from 'react';
import PokemonList from './components/PokemonList';
// import PokemonDetail from './components/PokemonDetail';
import axios from 'axios';
import Pagination from './components/Pagination'
import Pokemon from './Services/Pokemon';

function App() {
const [pokemon,setPokemon] = useState([]);
const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
const [nextPageUrl, setNextPageUrl] = useState();
const [prevPageUrl, setPrevPageUrl] = useState();
const [loading, setLoading] = useState(true);



//! AXIOS GET REQUEST

// useEffect(() => {
// //Set loading to true before api call
//   setLoading(true);
//   let cancel;
//   // ? Cancel token  takes an a function and returns the cancel token we need
//   //? Everytime axios makes a call, its going to set the cancel variable to the new cancel token
// axios.get(currentPageUrl, {cancelToken: new axios.CancelToken(c => cancel = c)}).then(res => {
//   //After api has been fetched set loading to false
//   console.log(pokemon)
// setLoading(false)   
// // setPokemon(res.data.results.map(p => p.name))
//   setNextPageUrl(res.data.next);
//   setPrevPageUrl(res.data.previous)

// })

// return () =>  cancel();

// }, [currentPageUrl])

//  //! Regular UseEffect Call
useEffect(() => {
  setLoading(true);
  fetch(currentPageUrl)
  .then((res) => res.json())
.then((data) => {
  console.log(data.results)
  setPokemon(data.results.map(p => p.name))
})
.then(setLoading(false))

  .catch((error) => {
    console.log(error);
  })
}, [currentPageUrl])


 //*Loading Pokemon
 const loadingPokemon = async (data) => {
let _pokemon = await Promise.all(data.map(async pokemon => {
  let pokemonRecord = await getPokemon(pokemon)
}))
 }


if(loading) {
  return 'Loading...';
}

//* Page Handlers

const goToNextPage = () => {
  setCurrentPageUrl(nextPageUrl);
}

const goToPreviousPage = () => {
  setCurrentPageUrl(prevPageUrl);
}



  return (
    <div className="App">
<h1>Pokedex</h1>
<PokemonList pokemon={pokemon}/>
<Pagination goToNextPage={nextPageUrl ? goToNextPage : null} 
goToPreviousPage={prevPageUrl ?  goToPreviousPage : null}/>
    </div>
  );
}

export default App;
 