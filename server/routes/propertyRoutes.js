const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// router.get('/rentals/property', getProperties);

router.get('/', propertyController.getProperties);

module.exports = router;