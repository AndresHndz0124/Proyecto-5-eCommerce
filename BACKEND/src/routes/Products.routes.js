/* Importing the express module and creating an instance of it. */
const { Router } = require('express')
const { getProducts, createProducts,updateProducts,deleteProducts,getProductById } = require('../controllers/Products.controllers')
const router = Router()

router.get('/get', getProducts)

router.get('/getProduct/:id',getProductById)

router.post('/post', createProducts)

router.put('/put', updateProducts)

router.delete('/delete', deleteProducts)

module.exports = router
