/* Importing the express module and creating an instance of it. */
const express = require('express')
const { getUsuario, createUsuario, Updateuser, loginUser, verifyUser, getIdByEmail } = require('../controllers/users.controllers')
const router = express.Router()
const auth = require('../config/authorization')

router.get('/get', auth, getUsuario)

router.get('/email/:email', getIdByEmail)

router.post('/Create', createUsuario)

router.put('/Update', auth, Updateuser)

router.post('/login', loginUser)

router.get('/verify', auth, verifyUser)

module.exports = router
