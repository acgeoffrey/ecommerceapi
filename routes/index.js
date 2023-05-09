const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.send(`
  <h2>e-Commerce API App</h2>
  `);
});

//router for /products routes
router.use('/products', require('./products'));

module.exports = router;
