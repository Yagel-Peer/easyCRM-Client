const axios = require("axios");

// @desc    Home page
// @route   GET "/"
// @access  Public
exports.homePage = (req, res) => {
  res.render('pages/home')
}

// @desc    Register page
// @route   GET "/register"
// @access  Public
exports.registerPage = (req, res) => {
  res.render('pages/register', {error: null})
}

// @desc    Register a user
// @route   POST "/register"
// @access  Public
exports.register = async(req, res, next) => {
  try {
    const {data} = await axios.post("http://localhost:5000/api/v1/auth/register", req.body);
    res.setHeader('Authorization', `Bearer ${data.token}`).cookie('token', data.token).redirect('/app/leads');
  } catch (err) {
    res.render('pages/register', {error: err.response.data.error});
  }
}

// @desc    Login page
// @route   GET "/login"
// @access  Public
exports.loginPage = (req, res) => {
  res.render('pages/login', {error: null})
}

// @desc    Login page
// @route   GET "/login"
// @access  Public
exports.login = async(req, res, next) => {
  try {
    const {data} = await axios.post("http://localhost:5000/api/v1/auth/login", req.body);
    res.setHeader('Authorization', `Bearer ${data.token}`).cookie('token', data.token).redirect('/app/leads');
    // 
  } catch (err) {
    res.render('pages/login', {error: err.response.data.error});
  }
}

// @desc    Logout
// @route   POST "/logout"
// @access  Private
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
}