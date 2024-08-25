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

router.get('/:creatureId/new', async (req, res) => {
    const creatureId = req.params.creatureId;
    try {
        await Creature.findById(creatureId);
        res.render('users/new.ejs', { creatureId });

    } catch (err) {
        res.status(500).send('Server error');
    }
});


  module.exports = router;