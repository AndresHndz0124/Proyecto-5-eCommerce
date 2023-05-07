import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import Home_products from "../Shopping_Cart/components/Home/index";
function Cart() {
    return (
        <React.Fragment>
            <Header />
            {/* <CartProvider> */}
            <Home_products />
            {/* </CartProvider> */}
            <FooterPage />
        </React.Fragment>
    )
}
export default Cart;
