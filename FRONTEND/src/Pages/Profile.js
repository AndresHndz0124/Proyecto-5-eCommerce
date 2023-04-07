import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import Profile from "../components/forms";


function User_Profile() {
    return (
        <React.Fragment>
            <Header />
            <div id="home" className="blog">
                <div className="frase">
                    <div>
                        <h4>"Cuando te cocinaba tu mamá no era importante el sabor sino el espíritu con el que te preparaba la comida. Eso hay que recrear como cocineros"</h4>
                    </div>
                    <footer className="mt-4"><p className="text-base font-bold text-white">Massimo Botura</p></footer>
                </div>
                <div>

                    <div className="subscription">
                        <h2 >Tu información personal</h2>
                        <h5>A través del siguiente formulario, podras diligenciar datos relevantes en cuanto a tu perfil de usuario.</h5>
                    </div>

                    <Profile />
                </div>

            </div>
            <FooterPage />
        </React.Fragment>
    )
}
export default User_Profile;