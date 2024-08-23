const mongoose = require('mongoose');
const Creature = require('../models/creature'); // Assuming your model is in the models directory
const creatureData = require('../data copy')

mongoose.connect('mongodb://localhost:27017/creatureDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));




Creature.insertMany(creatureData)
    .then(() => {
        console.log('Data seeded successfully');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
