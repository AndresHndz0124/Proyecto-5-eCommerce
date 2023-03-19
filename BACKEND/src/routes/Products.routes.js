/* Importing the express module and creating an instance of it. */
const { Router } = require('express')
const { getProducts, createProducts, updateProducts, deleteProducts } = require('../controllers/Products.controllers')
const router = Router()

router.get('/get', getProducts)

router.post('/post', createProducts)

router.put('/put', updateProducts)

router.delete('/delete', deleteProducts)

module.exports = router
