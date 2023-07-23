const router = require("express").Router();
const { salesPage, salePage, updateSale, deleteSale} = require("../controllers/sales");

router.get("/", salesPage);
router.route("/:id").get(salePage).put(updateSale).delete(deleteSale);

module.exports = router;