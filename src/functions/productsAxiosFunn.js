const axios = require('axios');

exports.getAll = async (req, res) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/v1/products`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const products = data.data;
    return products;
  } catch (err) {
    res.render(`app/products`, {
      user: req.user,
      error: err.response.data.error,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/products`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const product = data.data;
    return product;
  } catch (err) {
    res.render(`app/products/new`, {
      user: req.user,
      error: err.response.data.error,
    });
  }
};

exports.single = async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/products/${req.params.id}`,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const product = data.data;
    return product;
  } catch (err) {
    const { data } = await axios.get(`http://localhost:5000/api/v1/products`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const products = data.data;
    res.render(`app/products/all`, {
      user: req.user,
      products,
      error: 'Product not found',
    });
  }
};

exports.update = async (req, res) => {
  try {
    await axios.put(
      `http://localhost:5000/api/v1/products/${req.params.id}`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Updated successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
    const { data } = await axios.get(`http://localhost:5000/api/v1/products`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const products = data.data;
    res.render(`app/products/all`, {
      user: req.user,
      products,
      error: 'Product not found',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/v1/products/${req.params.id}`,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Deleted successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
    const { data } = await axios.get(`http://localhost:5000/api/v1/products`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const products = data.data;
    res.render(`app/products/all`, {
      user: req.user,
      products,
      error: 'Product not found',
    });
  }
};
