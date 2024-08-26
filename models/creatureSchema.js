const mongoose = require('mongoose');

const creatureSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    level: Number,
    eats: [String],
    egg: String,
    bs: {
        h: { b: Number, w: Number, t: Number },
        s: { b: Number, w: Number, t: Number },
        o: { b: Number, w: Number, t: Number },
        f: { b: Number, w: Number, t: Number },
        w: { b: Number, w: Number, t: Number },
        d: {
            b: Number,
            w: Number,
            t: Number,
        },
        m: {
            b: Number,
            w: Number,
            t: Number,
        },
        t: { b: Number, w: Number, t: Number }
    },
    carry: [String],
    desc: String
});


module.exports = creatureSchema;