import React from "react";
import Header from "./Header";
import FooterPage from "./footer";
import ContactForm from "../components/forms";

function HOME() {
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
                        <h2 >Reserva con nosotros!</h2>
                        <h5>A través del siguiente formulario, nos podremos comunicar contigo para revisar fechas y disponibilidad de horarios.</h5>
                    </div>

                    <ContactForm />
                </div>
            </div>
            <FooterPage />
        </React.Fragment>
    )
}
export default HOME;