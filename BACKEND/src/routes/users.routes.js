/* Importing the express module and creating an instance of it. */
const express = require('express')
const { getUsuario, createUsuario, Updateuser, loginUser, verifyUser } = require('../controllers/users.controllers')
const router = express.Router()
const auth = require('../config/authorization')

router.get('/get', getUsuario)

router.post('/post', createUsuario)

router.put('/put',auth, Updateuser)

router.post('/login', loginUser)

router.post('/verify',auth, verifyUser)

module.exports = router
