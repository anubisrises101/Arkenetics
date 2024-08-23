const mongoose = require('mongoose');

const creatureSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
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
            a: [{ b: Number }]
        },
        m: {
            b: Number,
            w: Number,
            t: Number,
            a: {
                w: { b: Number, sw: Number, st: Number },
                s: { b: Number }
            }
        },
        t: { b: Number, w: Number, t: Number }
    },
    carry: [String],
    desc: String
});


module.exports = creatureSchema;