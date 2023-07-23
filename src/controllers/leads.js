const leadsAxiosFunn = require('../functions/leadsAxiosFunn');
const productsAxiosFunn = require('../functions/productsAxiosFunn');

// @desc    Leads page
// @route   GET "/app/leads"
// @access  Private
exports.leadsPage = async (req, res) => {
  const leads = await leadsAxiosFunn.getAll(req, res);
  res.render('app/leads/all', { user: req.user, leads, error: null });
};

// @desc    Create lead
// @route   POST "/app/leads"
// @access  Private
exports.createLead = async (req, res) => {
  await leadsAxiosFunn.create(req, res);
  res.redirect('/app/leads');
};

// @desc    Leads page
// @route   GET "/app/leads"
// @access  Private
exports.newPage = async (req, res) => {
  res.render('app/leads/new', { user: req.user, error: null });
};

// @desc    Single lead page
// @route   GET "/app/leads"
// @access  Private
exports.leadPage = async (req, res) => {
  const lead = await leadsAxiosFunn.single(req, res);
  const products = await productsAxiosFunn.getAll(req, res);
  res.render('app/leads/single', {
    user: req.user,
    lead,
    products,
    error: null,
    successMsg: null,
  });
};

// @desc    Update lead
// @route   PUT "/app/leads/:id"
// @access  Private
exports.updateLead = async (req, res) => {
  const successMsg = await leadsAxiosFunn.update(req, res);
  const lead = await leadsAxiosFunn.single(req, res);
  const products = await productsAxiosFunn.getAll(req, res);
  res.render('app/leads/single', {
    user: req.user,
    lead,
    products,
    error: null,
    successMsg,
  });
};

// @desc    Delete lead
// @route   DELETE "/app/leads/:id"
// @access  Private
exports.deleteLead = async (req, res) => {
  await leadsAxiosFunn.delete(req, res);
  res.redirect('/app/leads');
};

// @desc    Create record
// @route   POT "/app/leads/:id/records"
// @access  Private
exports.createRecord = async (req, res) => {
  const successMsg = await leadsAxiosFunn.createRecord(req, res);
  const lead = await leadsAxiosFunn.single(req, res);
  const products = await productsAxiosFunn.getAll(req, res);
  res.render('app/leads/single', {
    user: req.user,
    lead,
    products,
    error: null,
    successMsg,
  });
};

// @desc    Delete record
// @route   DELETE "/app/leads/:id/records/:recordId"
// @access  Private
exports.updateRecord = async (req, res) => {
  const successMsg = await leadsAxiosFunn.updateRecord(req, res);
  const lead = await leadsAxiosFunn.single(req, res);
  const products = await productsAxiosFunn.getAll(req, res);
  res.render('app/leads/single', {
    user: req.user,
    lead,
    products,
    error: null,
    successMsg,
  });
};

// @desc    Delete record
// @route   DELETE "/app/leads/:id/records/:recordId"
// @access  Private
exports.deleteRecord = async (req, res) => {
  const successMsg = await leadsAxiosFunn.deleteRecord(req, res);
  const lead = await leadsAxiosFunn.single(req, res);
  const products = await productsAxiosFunn.getAll(req, res);
  res.render('app/leads/single', {
    user: req.user,
    lead,
    products,
    error: null,
    successMsg,
  });
};

// @desc    Create sale
// @route   POT "/app/leads/:id/sales"
// @access  Private
exports.createSale = async (req, res) => {
  const successMsg = await leadsAxiosFunn.createSale(req, res);
  const lead = await leadsAxiosFunn.single(req, res);
  const products = await productsAxiosFunn.getAll(req, res);
  res.render('app/leads/single', {
    user: req.user,
    lead,
    products,
    error: null,
    successMsg,
  });
};