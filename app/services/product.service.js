const Product = require("../models/product.model");

/* get all Products */
exports.getAllProduct = async (req_query) => {
  var name_search = new RegExp(req_query.name, "i");
  return await Product.find({
    name: name_search,
  });
};

/* get Product By Id */
exports.getAllProductById = async (product) => {
  return await Product.findOne({ _id: product });
};

/* Create Product */
exports.creatNewProduct = async (product) => {
  return await Product.create(product);
};

/* Update Product */
exports.updateProduct = async (product_id, product) => {
  let updated_product;
  updated_product = await Product.findOneAndUpdate(
    {
      _id: product_id,
    },
    { $set: product },
    { new: true }
  );
  return updated_product;
};

/* delete Product */
exports.deleteProduct = async (product_id) => {
  return await Product.deleteOne({ _id: product_id });
};
