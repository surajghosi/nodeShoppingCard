const apiRoute = "/api";

/* routes */
module.exports = (app) => {

  app.use(`${apiRoute}/product`, require("./product.routes"));
  app.use(`${apiRoute}/cart`, require("./cart.routes"));
  
};
