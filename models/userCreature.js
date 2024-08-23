const mongoose = require('mongoose');
const creatureSchema = require('./creatureSchema');

creatureSchema.add({user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}});

const UserCreature = mongoose.model('UserCreature', creatureSchema);

module.exports = UserCreature;