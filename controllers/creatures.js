const express = require('express');
const router = express.Router();
const UserCreature = require('../models/userCreature');
const Creature = require('../models/creature');

// All paths start with '/creatures'

// GET /creatures (index functionality)
router.get('/', async (req, res) => {
    const creatures = await UserCreature.find({user: req.user._id});
    res.render('creatures/index.ejs', { creatures });
});


// POST /creatures (create functionality)
router.post('/', async (req, res) => {
    try {
        const templateCreatureId = req.body.creatureId;
        const creature = await Creature.findById(templateCreatureId);
        const creatureObj = creature.toObject();
        delete creatureObj._id;
        creatureObj.user = req.user._id;
        creatureObj.templateCreatureId = templateCreatureId;
        await UserCreature.create(creatureObj);
        res.redirect(`/creatures`);
      } catch (err) {
        console.log(err);
        res.redirect('/');
      };
});

// GET /creatures/new --> new functionality/action
router.get('/new', async (req, res) => {
    const creatures = await Creature.find({});
    res.render('creatures/new.ejs', { creatures });
});

//GET /creatures/:creatureId --> show functionality
router.get('/:id', async (req, res)  => {
    const usercreature = await UserCreature.findById(req.params.id);
    res.render('creatures/show.ejs', {usercreature})
})


//GET /creatures/:id/edit --> edit functionality
router.get('/:id/edit', async (req, res) => {
    const usercreature = await UserCreature.findById(req.params.id);
    res.render('creatures/edit.ejs', {usercreature})
})

//PUT /creatures/:id --> update functionality
router.put('/:id', async (req, res) => {
    const usercreature = await UserCreature.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.body)
    let updatedCreature = {
        name: req.body.name,
        level: req.body.level,
        bs: {
            h: {...usercreature.bs.h, b: req.body.hB},
            s: {...usercreature.bs.s, b: req.body.sB},
            o: {...usercreature.bs.o, b: req.body.oB},
            f: {...usercreature.bs.f, b: req.body.fB},
            w: {...usercreature.bs.w, b: req.body.wB},
            d: {...usercreature.bs.d, b: req.body.dB},
            m: {...usercreature.bs.m, b: req.body.mB},
            t: {...usercreature.bs.t, b: req.body.tB},
        },
    }
    await UserCreature.findByIdAndUpdate(req.params.id, updatedCreature);
    res.redirect('/creatures')
})

// DELETE /creatures/:id --> delete functionality 
router.delete('/:id', async (req, res) => {
    try {
        await UserCreature.findByIdAndDelete(req.params.id)
        await req.user.save();
        res.redirect('/creatures')
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})



//hhow to create a userCreature obj
module.exports = router;