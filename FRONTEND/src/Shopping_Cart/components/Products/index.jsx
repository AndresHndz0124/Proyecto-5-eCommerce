import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
// import { ProductsData } from "../../data/Data";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart,products } = useContext(CartContext);
  return (
    <div className={styles.productsContainer}>
      {products &&
        products.map((product, i) => (
          <div key={i} className={styles.product}>
            <img src={product.img} alt={product.name} />
            <div>
              <p>{product.name} </p>
              <span>${product.price}</span>
            </div>
            {!product.inCart ? (
              <button onClick={() => AddItemToCart(product)}>
                Add to Cart
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Products;
