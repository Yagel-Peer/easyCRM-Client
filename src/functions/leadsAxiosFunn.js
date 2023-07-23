const axios = require('axios');

exports.getAll = async (req, res) => {
  try {
    if (req.query.status) {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/leads?status=${req.query.status}`,
        { headers: { Authorization: `Bearer ${req.cookies.token}` } }
      );
      const leads = data.data;
      return leads;
    }

    const { data } = await axios.get(`http://localhost:5000/api/v1/leads`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const leads = data.data;
    return leads;
  } catch (err) {
    res.render(`app/leads`, { user: req.user, error: err.response.data.error });
  }
};

exports.create = async (req, res) => {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/leads`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const lead = data.data;
    return lead;
  } catch (err) {
    res.render(`app/leads/new`, {
      user: req.user,
      error: err.response.data.error,
    });
  }
};

exports.single = async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/leads/${req.params.id}`,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const lead = data.data;
    return lead;
  } catch (err) {
    const { data } = await axios.get(`http://localhost:5000/api/v1/leads`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const leads = data.data;
    res.render(`app/leads/all`, {
      user: req.user,
      leads,
      error: 'Lead not found',
    });
  }
};

exports.update = async (req, res) => {
  try {
    await axios.put(
      `http://localhost:5000/api/v1/leads/${req.params.id}`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Updated successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
    const { data } = await axios.get(`http://localhost:5000/api/v1/leads`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const leads = data.data;
    res.render(`app/leads/all`, {
      user: req.user,
      leads,
      error: 'Lead not found',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await axios.delete(`http://localhost:5000/api/v1/leads/${req.params.id}`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const successMsg = 'Deleted successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
    const { data } = await axios.get(`http://localhost:5000/api/v1/leads`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    });
    const leads = data.data;
    res.render(`app/leads/all`, {
      user: req.user,
      leads,
      error: 'Lead not found',
    });
  }
};

exports.createRecord = async (req, res) => {
  try {
    await axios.post(
      `http://localhost:5000/api/v1/leads/${req.params.id}/records`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Record created successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
  }
};

exports.updateRecord = async (req, res) => {
  try {
    await axios.put(
      `http://localhost:5000/api/v1/leads/${req.params.id}/records/${req.params.recordId}`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Record updated successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/v1/leads/${req.params.id}/records/${req.params.recordId}`,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Record deleted successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
  }
};

exports.createSale = async (req, res) => {
  try {
    req.body.lead = req.params.id;
    await axios.post(
      `http://localhost:5000/api/v1/sales`,
      req.body,
      { headers: { Authorization: `Bearer ${req.cookies.token}` } }
    );
    const successMsg = 'Sale created successfully!';
    return successMsg;
  } catch (err) {
    console.log(err);
  }
};
