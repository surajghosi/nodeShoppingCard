const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength:50,
      unique:true,
      lowercase:true,
    },
    price: {
      type: Number,
      required: true,
      maxlength:5,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Product", productSchema);
