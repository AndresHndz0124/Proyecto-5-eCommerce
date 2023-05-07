import React from "react";
import Cart from "../Cart";
import Products from "../Products/index";
import styles from './styles.module.scss'

const Home_products = () => {
  return (
    <div className={styles.home}>
      <div className={styles.Container_menu}>
        <h1><u>Conoce nuestro menu</u></h1>
      </div>
      <Cart />
      <Products />
    </div>
  );
};

export default Home_products;
