import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles_product.module.scss";
// import { ProductsData } from "../../data/Data";

const Products = () => {
  const { AddItemToCart,products } = useContext(CartContext);
  const navigate = useNavigate(); // Obtenemos la función navigate
  
  const handleProductClick = (id) => {
    // console.log(id);
    navigate(`/product/${id}`);
  };
  

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
            <button type="button" class="btn btn-secondary" onClick={() => handleProductClick(product._id)}>Info</button>
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
