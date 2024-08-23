const mongoose = require('mongoose');
const creatureSchema = require('./creatureSchema');


const Creature = mongoose.model('Creature', creatureSchema);

module.exports = Creature;