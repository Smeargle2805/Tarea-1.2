const express = require ('express');
const app = express();

app.use(express.json());

const apiPokemon = require('./routes/apiPokemon');
app.use('/api/pokemon', apiPokemon);

const apiRegion = require('./routes/apiRegion');
app.use('/api/region', apiRegion);

const apiHabilidad = require('./routes/apiHabilidad');
app.use('/api/habilidad', apiHabilidad);

app.listen(3000);