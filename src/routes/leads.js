const router = require('express').Router();

const {
  leadsPage,
  newPage,
  createLead,
  leadPage,
  updateLead,
  deleteLead,
  createRecord,
  createSale,
  updateRecord,
  deleteRecord,
} = require('../controllers/leads');

router.route('/').get(leadsPage).post(createLead);
router.get('/new', newPage);
router.route('/:id').get(leadPage).put(updateLead).delete(deleteLead);
router.route('/:id/records').post(createRecord);
router.route('/:id/sales').post(createSale);
router.route('/:id/records/:recordId').put(updateRecord).delete(deleteRecord);

module.exports = router;
