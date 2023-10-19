const express = require('express');
const apiPokemon = express();
const { getPokemon, getIdPokemon } = require('../controllers/apiPokemonController');

apiPokemon.get('', getPokemon );

apiPokemon.get('/:id', getIdPokemon );

module.exports = apiPokemon;