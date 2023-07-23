const router = require("express").Router();
const {
  productsPage,
createProduct,
newPage,
productPage,
updateProduct,
deleteProduct,
} = require('../controllers/products');

router.route("/").get(productsPage).post(createProduct);
router.get("/new", newPage);
router.route("/:id").get(productPage).put(updateProduct).delete(deleteProduct);

module.exports = router;