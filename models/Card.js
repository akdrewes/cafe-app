const mongoose = require('mongoose')

const cardSchema = new  mongoose.Schema({
    src: {
        type: Buffer,
        contentType: String,
    },
    alt: {
        type: String,
    },
    title: {
        type: String,
        required: true,
        get: value => value.toUpperCase(),
    },
    street: {
        type: String,
        required: true,
        get: value => value.toUpperCase(),
    },
    district: {
        type: String,
        required: true,
        get: value => value.toUpperCase(),
    },
    rating: {
        workAtmosphere: Number,
        wlan: Number,
        coffee: Number,
    },
    openingHours: [
        {day: String, time: String},
    ]
})

module.exports = mongoose.model('Card', cardSchema)