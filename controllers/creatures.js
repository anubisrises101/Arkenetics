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

router.get('/creatures/:creatureId', async (req, res) => {
    const creatureId = req.params.creatureId;
    try {
        const creature = await Creature.findById(creatureId);
        if (creature) {
            res.render('users/edit.ejs', { creature });
        } else {
            res.status(404).send('Creature not found');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
});


  module.exports = router;