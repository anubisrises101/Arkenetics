const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt')

// All paths start with "/auth"

// GET /auth/sign-up (show sign-up form)
router.get('/sign-up', (req, res) => {
  res.render('auth/sign-up.ejs');
});

// router.get('/sign-up', (req, res) => {
//   res.send('Hola Mundo');
// });

// POST /auth/sign-up (create user)
router.post('/sign-up', async (req, res) => {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      throw new Error('Password & confirmation do not match');
    }
    req.body.password = bcrypt.hashSync(req.body.password, 6);
    const user = await User.create(req.body);
    // "remember" only the user's _id in the session object
    req.session.user = { _id: user._id };
    req.session.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect('/');
});

// POST /auth/login (login user)
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (!user) {
      return res.redirect('/auth/login');
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      req.session.user = { _id: user._id };
      req.session.save();
      // Perhaps update to some other functionality
      return res.redirect('/users');
    } else {
      return res.redirect('/auth/login');
    }
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

router.get('/login', async (req, res) => {
  res.render('auth/login.ejs');
});

// GET /auth/logout (logout)
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;