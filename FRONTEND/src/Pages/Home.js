import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import Home from "../Shopping_Cart/components/Home";
import { CartProvider } from "../Shopping_Cart/context/CartContext";
import PaypalButton from '../components/PaypalButton'

function Cart() {
    return (
        <React.Fragment>
            <Header />
            <CartProvider>
                <Home />
            </CartProvider>
            <PaypalButton value='50' />
            <FooterPage />
        </React.Fragment>
    )
}
export default Cart;
