const express = require('express')
const app = express()
const userRoutes = require('./routes/users.routes')
const ProductsRoutes = require('./routes/Products.routes')

const cors = require('cors')
const connectDB = require('./config/db')

require('dotenv').config()
connectDB()

app.use(cors())
app.use(express.json())

//3. Rutas
app.use('/Products',ProductsRoutes)
// app.use('/ProductsCart',ProductsCartRoutes)
app.use('/Users', userRoutes)

app.get('/', (req, res) => res.send('API conectada'))

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`El servidor está corriendo en ${process.env.PORT}`)
})
