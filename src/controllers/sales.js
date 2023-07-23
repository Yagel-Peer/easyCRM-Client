const salesAxiosFunn = require('../functions/salesAxiosFunn');

// @desc    Sales page
// @route   GET "/app/sales"
// @access  Private
exports.salesPage = async (req, res) => {
  const sales = await salesAxiosFunn.getAll(req, res);
  res.render('app/sales/all', { user: req.user, sales, error: null });
};

// @desc    Single sale page
// @route   GET "/app/sales/:id"
// @access  Private
exports.salePage = async (req, res) => {
  const sale = await salesAxiosFunn.single(req, res);
  res.render('app/sales/single', {
    user: req.user,
    sale,
    error: null,
    successMsg: null,
  });
};

// @desc    Update sale
// @route   PUT "/app/sales/:id"
// @access  Private
exports.updateSale = async (req, res) => {
  const successMsg = await salesAxiosFunn.update(req, res);
  const sale = await salesAxiosFunn.single(req, res);
  res.render('app/sales/single', {
    user: req.user,
    sale,
    error: null,
    successMsg,
  });
};

// @desc    Delete sale
// @route   DELETE "/app/sales/:id"
// @access  Private
exports.deleteSale = async (req, res) => {
  await salesAxiosFunn.delete(req, res);
  res.redirect('/app/sales');
};