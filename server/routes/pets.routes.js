const petControllers = require('../controllers/pets.controllers')

module.exports = app => {
    app.get('/api/pets', petControllers.getAllPets)
    app.get('/api/pets/:id', petControllers.getOnePet)
    app.post('/api/createPet', petControllers.createPet)
    app.put('/api/updatePet/:id', petControllers.updatePet)
    app.delete('/api/deletePet/:id', petControllers.deletePet)
}