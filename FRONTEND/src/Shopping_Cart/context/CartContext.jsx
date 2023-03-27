import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = JSON.parse(
        localStorage.getItem("cartProducts")
      );
      return productosEnLocalStorage ? productosEnLocalStorage : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("http://localhost:4000/Products/get")
      // .get(process.env.URL_BACKEND) 
      .then(({ data }) => setProducts(data.Product));
  };

  const AddItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart._id === product._id
    );
    console.log("Agregar", product._id);

    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart._id === product._id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const DeleteItemToCart = (productId) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart._id === productId
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart._id !== productId)
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart._id === productId) {
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