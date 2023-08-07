const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Must have a name'
        ]
    },

    pet: {
        type: String,
        required: [
            true,
            'Must input a pet name and must have more then 2 characters'
    ]},

    description: {
        type: String,
        required: [
            true,
            'Must input a description of more then 2 characters'
        ]
    },

    skillOne: {
        type: String
        },

    skillTwo: {
        type: String
        },

    skillThree: {
        type: String
        }
    }, {timestamps: true})

module.exports = mongoose.model("Pet", PetSchema)