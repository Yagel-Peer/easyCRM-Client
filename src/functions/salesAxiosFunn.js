const axios = require('axios');

exports.getAll = async (req, res) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/v1/sales`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const sales = data.data;
    return sales;
  } catch (err) {
    res.render(`app/sales`, {
      user: req.user,
      error: err.response.data.error,
    });
  }
};

exports.single = async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/sales/${req.params.id}`,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const sale = data.data;
    return sale;
  } catch (err) {
    const { data } = await axios.get(`http://localhost:5000/api/v1/sales`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const sales = data.data;
    res.render(`app/sales/all`, {
      user: req.user,
      sales,
      error: 'Sale not found',
    });
  }
};

exports.update = async (req, res) => {
  try {
    await axios.put(
      `http://localhost:5000/api/v1/sales/${req.params.id}`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Updated successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
    const { data } = await axios.get(`http://localhost:5000/api/v1/sales`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const sales = data.data;
    res.render(`app/sales/all`, {
      user: req.user,
      sales,
      error: 'Sale not found',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/v1/sales/${req.params.id}`,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Deleted successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
    const { data } = await axios.get(`http://localhost:5000/api/v1/sales`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const sales = data.data;
    res.render(`app/sales/all`, {
      user: req.user,
      sales,
      error: 'Sale not found',
    });
  }
};
