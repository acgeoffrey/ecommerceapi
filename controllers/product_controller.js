const Product = require('../models/product');

/*** Create a product in database ***/
module.exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      quantity: req.body.quantity,
    });

    return res.status(200).json({
      message: 'Product added in the database successfully',
      data: {
        product: {
          name: product.name,
          quantity: product.quantity,
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

/*** Get all the products from database ***/
module.exports.getProducts = async (req, res) => {
  try {
    //getting only the required fields
    const product = await Product.find({}, { name: 1, _id: 1, quantity: 1 });

    return res.status(200).json({
      message: 'Products fetched from the database successfully',
      data: {
        products: product,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

/*** Delete a product from database ***/
module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.deleteOne();

    return res.status(200).json({
      data: {
        message: 'Product deleted',
      },
    });
  } catch (err) {
    console.log(err);
  }
};

/*** Update quantity of a product ***/
module.exports.updateQuantity = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.quantity = req.query.number;
    product.save();

    return res.status(200).json({
      data: {
        product: {
          id: product._id,
          name: product.name,
          quantity: product.quantity,
        },
        message: 'Product updated successfully',
      },
    });
  } catch (err) {
    console.log(err);
  }
};
