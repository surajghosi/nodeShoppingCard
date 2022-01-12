const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controllers");

router.get("/", cartController.listCart);
router.post("/", cartController.createCart);
router.put("/:id", cartController.updateQuantity);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
