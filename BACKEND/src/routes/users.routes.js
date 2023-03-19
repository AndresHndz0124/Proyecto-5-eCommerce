/* Importing the express module and creating an instance of it. */
const express = require('express')
const { getUsuario, createUsuario, updateUsuario, loginUser, verifyUser } = require('../controllers/users.controllers')
const router = express.Router()

router.get('/obtener', getUsuario)

router.post('/crear', createUsuario)

router.put('/actualizar', updateUsuario)

router.post('/login', loginUser)

router.post('/verificar', verifyUser)

module.exports = router
