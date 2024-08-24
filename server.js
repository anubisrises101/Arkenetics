const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const app = express();
const session = require('express-session');
// const authController = require('./controllers/auth.js')

const port = process.env.PORT ? process.env.PORT : "3000";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Morgan for logging HTTP requests
app.use(morgan('dev'));
// serves static assets to the browser
app.use(express.static('public'))
// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

const addUserToReqAndLocals = require('./middleware/addUserToReqAndLocals.js');
const ensureLoggedIn = require('./middleware/ensureLoggedIn.js');



app.use(addUserToReqAndLocals);
app.use('/auth', require('./controllers/auth'));
app.use(ensureLoggedIn)
app.use('/users/creatures', require('./controllers/userCreatures.js'))
app.use('/creatures', require('./controllers/creatures.js'))
// Routes




app.get('/', async (req, res) => {
    res.render('home.ejs');
});



app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});