const express = require('express'),
    router = express.Router();
 
const service = require('../services/user.service')

//http: localhost:3000/api/users/
router.get('/', async (req, res) => {
const users = await service.getAllUsers() 
    res.send(users)
})

router.get('/:id', async (req, res) => {
const users = await service.getAllUserById(req.params.id) 
    res.send(users)
})

router.delete('/:id', async (req, res) => {
const users = await service.deleteUserById(req.params.id) 
    res.send(users)
})

router.post('/', async (req, res) => {
 await service.addOrEditUser(req.body) 
    res.status(201).send('Created successfully')
})

router.put('/:id', async (req, res) => {
    const affectedRows = await service.addOrEditUser(req.body, req.params.id) 
    if(affectedRows == 0)
        res.status(404).json('No record of this id: ' + req.params.id)
    else
        res.send('User Updated successfully')
})

module.exports = router;