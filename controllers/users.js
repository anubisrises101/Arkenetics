const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const UserCreatures = require('../models/userCreature,js')

// GET /users - Get all users
// router.get('/', async (req, res) => {
//         const allUsers = await User.find({});
//         res.render('users/index.ejs', {
//             users: allUsers
//         });
// });
router.get('/', async (req, res) => {
    const allCreatures = await Creature.find({});
    res.render('users/index.ejs', {
        creatures: allCreatures,
    });
});

// // GET /users/:userId
router.get('/:userId', async (req, res) => {
    const userCreatures = await userCreatures.find({user: req.params.userId});
    const allCreatures = await Creature.find({});
    res.render('users/index.ejs', {allCreatures, userCreatures});
});


module.exports = router;