const express = require('express');
const apiRegion = express();
const { getRegion, getIdRegion, postRegion, putRegion, deleteRegion } = require('../controllers/apiRegionController.js');

apiRegion.get('', getRegion);
apiRegion.get('/:id', getIdRegion);
apiRegion.post('', postRegion);
apiRegion.put('/:id', putRegion);
apiRegion.delete('/:id', deleteRegion);

module.exports = apiRegion;