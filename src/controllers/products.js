const productsAxiosFunn = require('../functions/productsAxiosFunn');

// @desc    Products page
// @route   GET "/app/products"
// @access  Private
exports.productsPage = async (req, res) => {
  const products = await productsAxiosFunn.getAll(req, res);
  res.render('app/products/all', { user: req.user, products, error: null });
};

// @desc    Create product
// @route   POST "/app/products"
// @access  Private
exports.createProduct = async (req, res) => {
  await productsAxiosFunn.create(req, res);
  res.redirect('/app/products');
};

// @desc    Product page
// @route   GET "/app/products"
// @access  Private
exports.newPage = async (req, res) => {
  res.render('app/products/new', { user: req.user, error: null });
};

// @desc    Single product page
// @route   GET "/app/products"
// @access  Private
exports.productPage = async (req, res) => {
  const product = await productsAxiosFunn.single(req, res);
  res.render('app/products/single', {
    user: req.user,
    product,
    error: null,
    successMsg: null,
  });
};

// @desc    Update product
// @route   PUT "/app/products/:id"
// @access  Private
exports.updateProduct = async (req, res) => {
  const successMsg = await productsAxiosFunn.update(req, res);
  const product = await productsAxiosFunn.single(req, res);
  res.render('app/products/single', {
    user: req.user,
    product,
    error: null,
    successMsg,
  });
};

// @desc    Delete product
// @route   DELETE "/app/products/:id"
// @access  Private
exports.deleteProduct = async (req, res) => {
  await productsAxiosFunn.delete(req, res);
  res.redirect('/app/products');
};