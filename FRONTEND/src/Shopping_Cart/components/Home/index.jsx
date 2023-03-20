import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import styles from './styles.module.scss'

const Home = () => {
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

export default Home;
