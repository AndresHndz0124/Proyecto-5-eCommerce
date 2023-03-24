import { createContext, useEffect, useState } from "react";
import axios from "axios";
/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */

  const [cartItems, setCartItems] = useState(() => {
    try {
      /* Verificamos si hay productos en el local storage,
      si hay algo lo parseamos porque se guarda como string 
      y si no hay nada devolvemos un array vacio */
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    getProducts();
      localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      await axios
        .get("http://localhost:4000/Products/get")
        .then(({ data }) => setProducts(data.Product));
    };
  
  /* Creamos la funcion para agregar productos al carrito */
  const AddItemToCart = (product) => {
    /* Recibimos un producto y nos fijamos si ya esta en el carrito */
    const inCart = cartItems.find(
      (productInCart) => productInCart._id === product._id
    );
    console.log('Agregar',inCart,product)

    /* Si el producto se encuentra en el carrito, recorremos el carrito
    y al producto le sumamos uno a la cantidad, sino retornamos el carrito como estaba */
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart._id === product._id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
      /* Si el producto no se encuentra al carrito, lo agregamos y dejamos en uno la cantidad */
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
    useEffect(() => {
      localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);
    getProducts();

  };

  /* Creamos la funcion para borrar productos del carrito */
  const DeleteItemToCart = (productId) => {
    /* Buscamos el producto con su id */
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === productId
    );
    console.log('eliminar',inCart,productId)
    /* Si la cantidad del producto es igual a 1, filtramos el carrito y lo sacamos */
    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== productId)
      );
    } else {
      /* Si la cantidad es mayor a 1, recorremos el carrito
      y al producto le restamos uno en su cantidad, sino devolvemos el carrito como estaba */
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === productId) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, AddItemToCart, DeleteItemToCart }}
    // value={{ cartItems, AddItemToCart, DeleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;