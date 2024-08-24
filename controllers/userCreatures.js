const UserCreature = require('../models/userCreature');
const express = require('express');
const router = express.Router();


// all  paths start with '/usercreatures'

//GET /users/creatures (index functionality)
router.get('/', async (req, res) => {
    const creatures = await UserCreature.find({user: req.user._id});
    res.render('usercreatures/index.ejs', {creatures});
});

router.get('/', async (req, res) => {
    const allRecipes = await Recipe.find({});
    res.render('recipes/index.ejs', {
        recipes: allRecipes,
    });
  });

// do this for seeing all users creatures
// const creatures = await UserCreature.find({}).populate('user');



// assume creature is a Creature document
// const creatureObj = creature.toObject();
// don't want to use _id from original creature
// delete creatureObj._id;
// creatureObj.user = req.user._id;
// Create the userCreature 
// const userCreature = UserCreature.create(creatureObj);