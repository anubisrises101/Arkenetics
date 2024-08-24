const express = require('express');
const router = express.Router();
const Creature = require('../models/creature');


//get all creatures to pass to the select feature
router.get('/', async (req, res) => {
    const allCreatures = await Creature.find({});
    res.render('users/index.ejs', {
        creatures: allCreatures,
    });
  });

  module.exports = router;