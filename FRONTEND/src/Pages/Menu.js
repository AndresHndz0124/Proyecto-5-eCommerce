import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import Mainprop from "../components/Main";

function Ourmenu() {
    return (
        <React.Fragment>
            <Header />
            <Mainprop/>
            <FooterPage />
        </React.Fragment>
    )
}
export default Ourmenu;
