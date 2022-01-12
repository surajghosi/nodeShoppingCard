const { errorResponse, successResponse } = require("../common/response.common");
const constants = require("../common/constants.common");
const productService = require("../services/product.service");

/* for List Product */
exports.listProduct = async (req, res, next) => {
  try {
    let data = await productService.getAllProduct(req.query);
    return res.status(200).json(successResponse(constants.PRODUCT_LIST, data));
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};

/* for Create Product */
exports.createProduct = async (req, res, next) => {
  try {
    let user_data = req.body;
    let icon;
    if (req.file !== undefined) {
      icon = req.file.filename;
      req.body.image = icon;
    }
    let created_product = await productService.creatNewProduct(user_data);
    if (created_product) {
      return res
        .status(200)
        .json(
          successResponse(constants.PRODUCT_CREATE_SUCCESS, created_product)
        );
    }
  } catch (errors) {
    res.status(500).json(errorResponse(errors.message));
  }
};

/* for Update Product */
exports.updateProduct = async (req, res, next) => {
  try {
    let product_id = req.params.id;
    let icon;
    if (req.file !== undefined) {
      icon = req.file.filename;
      req.body.image = icon;
    }
    let updated_product = await productService.updateProduct(
      product_id,
      req.body
    );
    if (updated_product) {
      return res
        .status(200)
        .json(
          successResponse(constants.PRODUCT_UPDATE_SUCCESS, updated_product)
        );
    }
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};

/* for Delete Product */
exports.deleteProduct = async (req, res, next) => {
  try {
    let product_id = await req.params.id;
    await productService.deleteProduct(product_id);
    res.status(200).json(successResponse(constants.PRODUCT_DELETE_SUCCESS));
  } catch (err) {
    res.status(500).json(errorResponse(err.message));
  }
};
