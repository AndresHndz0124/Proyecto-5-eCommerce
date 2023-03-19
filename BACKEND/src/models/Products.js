// 1. IMPORTACIONES
const mongoose = require('mongoose')

// 2. SCHEMA
const ProductsSchema  = mongoose.Schema(
	{
		nombre: {
			type: String,
			required: true,
		},
		precio: {
			type: Number,
			required: true,
		},
		imagen: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // Permite agregar la fecha en el que fue generado el documento.
	}
);


// // 3. MODELO
const Products = mongoose.model('Products', ProductsSchema)

// // 4. EXPORTACIÓN
module.exports = Products
