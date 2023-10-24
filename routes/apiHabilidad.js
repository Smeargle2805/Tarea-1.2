const express = require('express');
const apiHabilidad = express();
const { getHabilidad, getIdHabilidad, postHabilidad } = require('../controllers/apiHabilidadController.js');

apiHabilidad.get('', getHabilidad);
apiHabilidad.get('', getIdHabilidad);
apiHabilidad.post('', postHabilidad);

module.exports = apiHabilidad;