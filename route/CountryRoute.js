const express = require('express');
const CountryController = require('../controller/CountryController');

const router = express.Router();

router.post('/create-country', CategoryController.createCountry);
router.put('/update-country/:id', CategoryController.updateCountry);
router.delete('/delete-country/:id', CategoryController.deleteCountry);
router.get('/find-country-by-id/:id', CategoryController.findCountryById);
router.get('/find-all-country', CategoryController.findAllCountries);

module.exports = router;