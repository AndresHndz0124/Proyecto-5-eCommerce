import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../Shopping_Cart/context/CartContext";
import clienteAxios from "../config/axios";
import styles from "../Shopping_Cart/components/Home/styles.module.scss";
import Header from "./Header";
import FooterPage from "./footer";
import Cart from "../Shopping_Cart/components/Cart/index";



const ProductDetail = () => {
  const { id } = useParams();
  const { AddItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null); // Inicializa product como null en lugar de un objeto vacío

  useEffect(() => {
    const getProduct = async () => {
      const response = await clienteAxios.get(`/Products/getProduct/${id}`);
      // console.log(id)
      setProduct(response.data);
      // console.log(response.data.Product)
    };
    getProduct();
  }, [id]);

  const handleClick = (product) => {
    AddItemToCart(product);
  };

  if (!product) { // Actualiza la condición para comprobar si product es falsy
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Header />
      <Cart />
      <div className={styles.home}>
        <div className={styles.Container_menu}>
          <div className={styles.Container}>
            <div>
              <img src={product.img} alt={product.name} />
            </div>
            <div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
            <button onClick={() => handleClick(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <FooterPage />
    </React.Fragment>
  );
};

export default ProductDetail;

