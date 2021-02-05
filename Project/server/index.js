const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

const PORT = 4000;

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

// DB connection
mongoose.connect('mongodb+srv://admin:admin123@clustertin.oipv2.mongodb.net/projectdb?retryWrites=true&w=majority', {
   useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
    console.log("Mongodb connection established succesfully");
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Import Routes
const rootRoute = require('./routes/root'); 
const noteRoute = require('./routes/note');
const binRoute = require('./routes/bin');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/', rootRoute);
app.use('/note', noteRoute);
app.use('/trashbin', binRoute);
app.use('/product', productRoute);
app.use('/cart', cartRoute);

// Listen Port
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});