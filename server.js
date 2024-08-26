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

app.use(morgan('dev'));
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
// app.use(express.static('public'));
// app.use(express.static('assets'));

const addUserToReqAndLocals = require('./middleware/addUserToReqAndLocals.js');
app.use(addUserToReqAndLocals);

const ensureLoggedIn = require('./middleware/ensureLoggedIn.js');

// Routes
app.use('/auth', require('./controllers/auth'));
app.use('/creatures', ensureLoggedIn, require('./controllers/creatures.js'))

app.get('/', async (req, res) => {
    res.render('home.ejs');
});

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});