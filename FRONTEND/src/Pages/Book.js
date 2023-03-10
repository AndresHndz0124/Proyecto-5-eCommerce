import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import Mainbooking from "../components/MainBooking";

function Booking() {
    return (
        <React.Fragment>
            <Header />
            <Mainbooking/>
            <FooterPage />
        </React.Fragment>
    )
}
export default Booking;