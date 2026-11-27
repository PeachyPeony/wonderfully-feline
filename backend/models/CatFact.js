const mongoose = require('mongoose')

const catFactSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fact: {
        type: String,
        required: true
    },
    more: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('CatFact', catFactSchema)