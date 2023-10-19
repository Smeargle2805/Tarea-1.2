const express = require ('express');
const app = express();

app.use(express.json());

const apiPokemon = require('./routes/apiPokemon');
app.use('/api/pokemon', apiPokemon);

app.listen(4000);