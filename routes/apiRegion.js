const express = require('express');
const apiRegion = express();
const { getRegion, getIdRegion, postRegion } = require('../controllers/apiRegionController.js');

apiRegion.get('', getRegion);
apiRegion.get('', getIdRegion);
apiRegion.post('', postRegion);

module.exports = apiRegion;