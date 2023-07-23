const axios = require("axios");

const secure = async (req, res, next) => {
  if(!req.cookies.token) {
    const error = 'You need to sign in'
    return res.status(401).render('pages/login', {error})
  }
  try {
    const {data} = await axios.get("http://localhost:5000/api/v1/auth/me", {headers: {"Authorization": `Bearer ${req.cookies.token}`}});
    req.user = data.data;
    next();
  } catch (err) {
    console.log(err);
  }
}

module.exports = secure