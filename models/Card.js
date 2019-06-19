const mongoose = require('mongoose')

const cardSchema = new  mongoose.Schema({
    img: {
        type: String,
    },
    alt: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    score: {
        workAtmosphere: Number,
        wlan: Number,
        coffee: Number,
    },
    counter: {
        type: Number,
    },
    openingHours: [
        {day: String, 
            time: {
                open: String,
                close: String,
            },
        }
    ]
})

module.exports = mongoose.model('Card', cardSchema)