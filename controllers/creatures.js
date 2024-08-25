const UserCreature = require('../models/userCreature');
const express = require('express');
const router = express.Router();
const Creature = require('../models/creature');

// all  paths start with '/usercreatures'

//GET /users/creatures (index functionality)
router.get('/:userId', async (req, res) => {
    const creatures = await UserCreature.find({user: req.params.userId});
    res.render('users/index.ejs', {creatures});
});

// router.new('/', async (req, res) => {
//     const creatureId = req.body.creatures
//     const creatureObj = await Creature.findById(creatureId);
//     delete creatureObj._id;
//     creatureObj.user = req.user._id;
//     const userCreature = UserCreature.create(creatureObj);
//     res.redirect(`/users/creatures/${req.user._id}`)
// })

// GET /creatures/new --> new functionality/action
router.get('/new', async (req, res) => {
    const creatures = await Creature.find({});
    res.render('creatures/new.ejs', { creatures });
});

//hhow to create a userCreature obj
module.exports = router;