const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT;
var multer = require('multer');
var forms = multer();
/* db connection */
require("./config/dbconnection.js");

app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(forms.array()); 
app.use(bodyParser.urlencoded({ extended: true }));


/* routes */
require("./app/routes")(app);

// listen to the server at 5000 port
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
