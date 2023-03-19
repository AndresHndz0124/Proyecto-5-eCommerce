const Products = require('../models/Products')

// const menu_inicial = [
//     {
//         "nombre": "Hamburguesa clásica",
//         "precio": 8.99,
//         "imagen": "https://www.example.com/hamburguesa.jpg"
//       },
//       {
//         "nombre": "Pizza de pepperoni",
//         "precio": 12.99,
//         "imagen": "https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg"
//       },
//       {
//         "nombre": "Ensalada César",
//         "precio": 6.99,
//         "imagen": "https://www.example.com/ensalada.jpg"
//       },
//       {
//         "nombre": "Sándwich de pollo",
//         "precio": 9.99,
//         "imagen": "https://www.example.com/sandwich.jpg"
//       },
//       {
//         "nombre": "Tacos de carne asada",
//         "precio": 10.99,
//         "imagen": "https://www.example.com/tacos.jpg"
//       },
//       {
//         "nombre": "Sopa de tomate",
//         "precio": 4.99,
//         "imagen": "https://www.example.com/sopa.jpg"
//       },
//       {
//         "nombre": "Arroz frito",
//         "precio": 8.99,
//         "imagen": "https://www.example.com/arroz.jpg"
//       },
//       {
//         "nombre": "Salteado de pollo y verduras",
//         "precio": 11.99,
//         "imagen": "https://www.example.com/salteado.jpg"
//       },
//       {
//         "nombre": "Pollo al curry",
//         "precio": 12.99,
//         "imagen": "https://www.example.com/curry.jpg"
//       },
//       {
//         "nombre": "Salmón a la parrilla",
//         "precio": 15.99,
//         "imagen": "https://www.example.com/salmon.jpg"
//       },
//       {
//         "nombre": "Pasta Alfredo",
//         "precio": 11.99,
//         "imagen": "https://www.example.com/pasta.jpg"
//       },
//       {
//         "nombre": "Costillas de cerdo",
//         "precio": 14.99,
//         "imagen": "https://www.example.com/costillas.jpg"
//       }
// ]

// // Carga toda la lista a través de un ciclo
// function createProducts() {
//     menu_inicial.forEach((elemento) => {
//         Products.create(elemento, function (err, resultado) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(resultado);
//             }
//         });        
//     });
// }



const getProducts = async (req, res) => {
	try {
		const Product = await Products.find({})
		res.json({ Product })
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error obteniendo los datos',
		})
	}
}

const createProducts = async (req, res) => {
	const { nombre, precio, imagen } = req.body

	try {
		const NewProduct = await Products.create({ nombre, precio, imagen  })
		res.json(NewProduct)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error guardando los datos',
		})
	}
}

const updateProducts = async (req, res) => {
	const { id, nombre, precio, imagen  } = req.body

	try {
		const UpdateProduct = await Products.findByIdAndUpdate(id, { nombre, precio, imagen  }, { new: true })
		res.json(UpdateProduct)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error actualizando el Producto',
		})
	}
}

const deleteProducts = async (req, res) => {
	const { id } = req.body

	try {
		const ProductDelete = await Products.findByIdAndRemove({ _id: id })

		res.json(ProductDelete)
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error borrando el dato especificado',
		})
	}
}

module.exports = { getProducts, createProducts, updateProducts, deleteProducts }
