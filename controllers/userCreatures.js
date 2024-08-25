const UserCreature = require('../models/userCreature');
const express = require('express');
const router = express.Router();


// all  paths start with '/usercreatures'

//GET /users/creatures (index functionality)
router.get('/', async (req, res) => {
    const creatures = await UserCreature.find({user: req.user._id});
    res.render('users/index.ejs', {creatures});
});

router.create('/creatures', async (req, res) => {
    const creatureObj = creature.toObject();
    delete creatureObj._id;
    creatureObj.user = req.user._id;
    const userCreature = UserCreature.create(creatureObj);
    res.render('users/index.ejs', userCreature)
})



module.exports = router;