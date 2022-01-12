const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

/* get all Cart */
exports.getAllCart = async () => {
  return await Cart.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product_id",
      },
    },
    {
      $project: {
        "product_id.name": 1,
        "product_id.image": 1,
        "product_id.price": 1,
        quantity: 1,
        total: 1,
      },
    },
  ]);
};

/* get Product By Id */
exports.getAllProductById = async (cart) => {
  return await Product.findOne({ _id: cart });
};

/* get Cart By Id */
exports.getAllCartById = async (cart) => {
    return await Cart.findOne({ _id: cart });
  };

/* Create Cart */
exports.creatNewCart = async (cart) => {
  return await Cart.create(cart);
};

/* Update Cart */
exports.updateCart = async (cart_id, cart) => {
  let updated_cart;
  updated_cart = await Cart.findOneAndUpdate(
    {
      _id: cart_id,
    },
    { $set: cart },
    { new: true }
  );
  return updated_cart;
};

/* delete Product */
exports.deleteCart = async (cart_id) => {
  return await Cart.deleteOne({ _id: cart_id });
};
