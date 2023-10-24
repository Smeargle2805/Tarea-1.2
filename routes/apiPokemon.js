const express = require('express');
const apiPokemon = express();
const { getPokemon, getIdPokemon, getRegionPokemon, postPokemon, putPokemon, deletePokemon } = require('../controllers/apiPokemonController');

apiPokemon.get('', getPokemon );
apiPokemon.get('/:id', getIdPokemon );
apiPokemon.get('/region/:region', getRegionPokemon );
apiPokemon.post('', postPokemon);
apiPokemon.put('/:id', putPokemon);
apiPokemon.delete('/:id', deletePokemon);


module.exports = apiPokemon;