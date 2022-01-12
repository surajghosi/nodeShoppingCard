const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");
const productController = require("../controllers/product.controllers");
const { validate } = require("../middlewares/validate.middleware");
const { productSchema } = require("../validators/product.validator");
const upload = require("../common/multer.common");

router.get("/", productController.listProduct);
router.post(
  "/",
  upload,
  validate(checkSchema(productSchema)),
  productController.createProduct
);
router.put("/:id", upload, productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
