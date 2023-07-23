const router = require('express').Router();
const {
  homePage,
  registerPage,
  register,
  loginPage,
  login,
  logout,
} = require('../controllers/home');

router.get('/', homePage);
router.route('/register').get(registerPage).post(register);
router.route('/login').get(loginPage).post(login);
router.route('/logout').post(logout);

module.exports = router;
