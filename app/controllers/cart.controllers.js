const { errorResponse, successResponse } = require("../common/response.common");
const constants = require("../common/constants.common");
const cartService = require("../services/cart.service");

/* for List Cart */
exports.listCart = async (req, res, next) => {
  try {
    let data = await cartService.getAllCart();
    return res.status(200).json(successResponse(constants.CART_LIST, data));
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};

/* for Create Cart */
exports.createCart = async (req, res, next) => {
  try {
    let user_data = req.body;
    let product_id = user_data.product_id;
    const product_data = await cartService.getAllProductById(product_id);
    let total = user_data.quantity*product_data.price;
    user_data.total = total;
    let created_cart = await cartService.creatNewCart(user_data);
    if (created_cart) {
      return res
        .status(200)
        .json(successResponse(constants.CART_CREATE_SUCCESS, created_cart));
    }
  } catch (errors) {
    res.status(500).json(errorResponse(errors.message));
  }
};

/* for Update Cart */
exports.updateQuantity = async (req, res, next) => {
  try {
    let user_data = req.body;
    let cart_id = req.params.id;
    let cart_data = await cartService.getAllCartById(cart_id);
    let product_data = await cartService.getAllProductById(
      cart_data.product_id
    );
    let total = user_data.quantity*product_data.price;
    user_data.total = total;
    let updated_cart = await cartService.updateCart(cart_id, user_data);
    if (updated_cart) {
      return res
        .status(200)
        .json(successResponse(constants.CART_UPDATE_SUCCESS, updated_cart));
    }
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};

/* for Delete Cart */
exports.deleteCart = async (req, res, next) => {
  try {
    let cart_id = await req.params.id;
    await cartService.deleteCart(cart_id);
    res.status(200).json(successResponse(constants.CART_DELETE_SUCCESS));
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};
