const UserCreature = require('../models/userCreature');
const express = require('express');
const router = express.Router();


// all  paths start with '/usercreatures'

//GET /usercreatures (index functionality)
router.get('/', async (req, res) => {
    const creatures = await UserCreature.find({user: req.user._id});
    res.render('usercreatures/index.ejs', {creatures});
});



// do this for seeing all users creatures
// const creatures = await UserCreature.find({}).populate('user');
