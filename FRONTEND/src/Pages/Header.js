import React, { useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Carts from "../Shopping_Cart/components/Home/Cart_Home";
import { CartProvider } from "../Shopping_Cart/context/CartContext";
import { UserContext } from '../context/userContext'

function Header() {
    const location = useLocation();
    const ctx = useContext(UserContext)
    const { logout, authStatus } = ctx
    return (
        <header>
            <nav className="navbar_propio navbar-expand-lg navbar-dark bg-dark static-top">
                {/* <nav className="navbar-expand-lg navbar-dark bg-dark static-top"> */}
                <div className="container_propio container header">
                    <a className="navbar-brand" href="!#">
                        <img src="https://reverent-banach-cb9630.netlify.app/logo-ucamp-dark.png" alt="..." height="60"></img>
                    </a>
                    <div className="Div_center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="!#">ECommerce</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#">PROYECTO 5: Aplicación de Comercio Electrónico</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Div_fijo">
                        <ul className="navbar-nav ml-auto" id="Fijo">

                            {authStatus ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/"><u>Home</u></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/User_Profile"><u>Profile</u></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to='/' onClick={logout}><u>Cerrar sesión</u></Link>
                                    </li>
                                </>

                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to='/login'><u>Login</u></Link>
                                </li>
                            )}


                        </ul>
                    </div>
                </div>
                {/* Muestra el componente Carts solo en las rutas diferentes a la página de inicio */}

                {location.pathname !== '/' && authStatus && (
                    <CartProvider>
                        <Carts />
                    </CartProvider>
                )}


            </nav>
            <Outlet />
        </header >
    );
}

export default Header;