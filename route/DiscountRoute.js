const express = require('express');
const CategoryController = require('../controller/DiscountController');

const router = express.Router();

router.post('/create-discount', CategoryController.createDiscount);
router.put('/update-discount/:id', CategoryController.updateDiscount);
router.delete('/delete-discount/:id', CategoryController.deleteDiscount);
router.get('/find-discount-by-id/:id', CategoryController.findDiscountById);
router.get('/find-all-discount', CategoryController.findAllDiscount);

module.exports = router;