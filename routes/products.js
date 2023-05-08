const express = require('express');
const router = express.Router();

const productController = require('../controllers/product_controller');

router.get('/', productController.getProducts);
router.post('/create', productController.createProduct);
router.delete('/:id', productController.deleteProduct);
router.post('/:id/update_quantity', productController.updateQuantity);

module.exports = router;
