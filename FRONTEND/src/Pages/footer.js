import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function FooterPage() {
    return (
        <footer className="bg-dark text-center text-white">

            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'google']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1"
                        href="https://www.linkedin.com/in/andr%C3%A9s-felipe-hern%C3%A1ndez-velandia-108392166/" role="button"><i><FontAwesomeIcon icon={['fab', 'linkedin']} /></i></a>

                    <a className="btn btn-outline-light btn-floating m-1"
                        href="https://github.com/AndresHndz0124/Proyecto-2-Fronted-APP-CRUD" role="button"><i><FontAwesomeIcon icon={['fab', 'github']} /></i></a>
                </section>

                <section className="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
                <div className="flex_footer">


                    <div className="texto">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+1 (786) xxx-4627</span>
                    </div>

                    <div className="texto">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>contacto@lamiafamiglia.com</span>
                    </div>
                </div>

            </div>
            <div className="text-center p-3 fot">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}

export default FooterPage;