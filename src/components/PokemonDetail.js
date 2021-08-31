/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'

function PokemonDetail() {

const [pokemon, setPokemon] = useState([]);

useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((res) => res.json())
    .then(setPokemon)
    .catch((error) => {
        console.log(error);
    })
}, [])

console.log(setPokemon)


    return (
        <div>
            
        </div>
    )
}

export default PokemonDetail
