import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import ContactForm from "../components/forms";


function Blog() {
    return (
        <React.Fragment>
            <Header />
            <div id="home" className="blog">
                <div className="frase">
                    <div>
                        <h4>"Cuando te cocinaba tu mamá no era importante el sabor sino el espíritu con el que te preparaba la comida. Eso hay que recrear como cocineros"</h4>
                    </div>
                    <footer class="mt-4"><p class="text-base font-bold text-white">Massimo Botura</p></footer>
                </div>
                <div>

                    <div className="subscription">
                        <h2 >Tu información personal</h2>
                        <h5>A través del siguiente formulario, podras diligenciar datos relevantes en cuanto a tu perfil de usuario.</h5>
                    </div>

                    <ContactForm />
                </div>

            </div>
            <FooterPage />
        </React.Fragment>
    )
}
export default Blog;