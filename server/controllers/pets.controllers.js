const Pet = require("../models/pets.model")

module.exports = {

    getAllPets: (req,res) => {
        Pet.find({})
            .then(allPets => {
                res.json(allPets)
            })
            .catch(err => {
                res.json(err)
            })
    },

    getOnePet: (req,res) => {
        Pet.findOne({_id: req.params.id})
            .then(onePet => {
                res.json(onePet)
            })
            .catch(err => {
                res.json(err)
            })
    },

    createPet: (req,res) => {
        Pet.create(req.body)
            .then(newPet => {
                res.json(newPet)
            })
            .catch(err => {
                res.json(err)
            })
    },

    updatePet: (req,res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
            .then( updatedPet => {
                res.json(updatedPet)
            })
            .catch( err => {
                res.json(err)
            })
    },

    deletePet: (req,res) => {
        Pet.deleteOne({_id: req.params.id})
            .then(result => {
                res.json(result)
            })
            .catch( err => {
                res.json(err)
            })
    }
}