const express = require('express');
const apiHabilidad = express();
const { getHabilidad, getIdHabilidad, postHabilidad, putHabilidad, deleteHabilidad } = require('../controllers/apiHabilidadController.js');

apiHabilidad.get('', getHabilidad);
apiHabilidad.get('/:id', getIdHabilidad);
apiHabilidad.post('', postHabilidad);
apiHabilidad.put('/:id', putHabilidad);
apiHabilidad.delete('/:id', deleteHabilidad);

module.exports = apiHabilidad;