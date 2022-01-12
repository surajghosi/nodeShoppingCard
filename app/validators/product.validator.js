exports.productSchema = {
  name: {
    notEmpty: true,
    errorMessage: "Name cannot be empty",
    isLength: {
      options: { max: 50 },
      errorMessage: "Name can not be more than 50 Characters",
    },
  },
  price: {
    notEmpty: true,
    errorMessage: "Price cannot be empty",
    isLength: {
      options: { max: 5 },
      errorMessage: "Price can not be more than 5 digit",
    },
  },
  price:{
    isInt:true,
    errorMessage:"Enter Price in Numbers"
  }
};
