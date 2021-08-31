/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route,Switch,Link, useParams} from 'react-router-dom';

function PokemonDetail() {


    const { id } = useParams();


const [pokemon, setPokemon] = useState([]);

useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((res) => res.json())
    .then(setPokemon)
    .catch((error) => {
        console.log(error)
    })
}, [])


// console.log(pokemon)


    return (
        <Router>
        <div className='pokemon-container'>
            <Switch>
                <Route exact path='/'>
           
                </Route>
            </Switch>
        </div>

        </Router>
    )
}

export default PokemonDetail
