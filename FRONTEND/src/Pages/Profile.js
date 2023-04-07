import React, { useState, useEffect, useContext } from 'react';
import Header from "./Header";
import FooterPage from "./footer";
import { UserContext } from '../context/userContext';
import clienteAxios from '../config/axios';

export default function Profile() {

    const userCtx = useContext(UserContext);
    const { userSubmitForm } = userCtx;

    const [userForm, setUserForm] = useState({
        name: "",
        country: "",
        address: "",
        City: "",
        State: "",
        phone: "",
        email: ""
    });

    const [loading, setLoading] = useState(true);

    let countries = [
        "-----",
        "México",
        "Colombia",
        "Perú",
        "Chile",
        "Otro país..."
    ];

    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await clienteAxios.get('/Users/get', {
                    headers: {
                        'x-auth-token': token
                    }
                });
                setUserForm(response.data.usuario);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        getUserData();
    }, []);

    const handleChange = (event) => {
        setUserForm({
            ...userForm,
            [event.target.name]: event.target.value
        });
    };

    const sendData = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await clienteAxios.put('/Users/Update', {
                username: userForm.name,
                email: userCtx.user.email,
                country: userForm.country,
                address: userForm.address,
                City: userForm.city,
                State: userForm.state,
                phone: userForm.phone,
            }, {
                headers: {
                    'x-auth-token': token
                }
            });
            userSubmitForm(userForm);
            alert("User updated successfully");
        } catch (error) {
            console.error(error);
            alert("An error occurred while updating the user");
        }
    };

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <React.Fragment>
            <Header />
            <div>
                <h2>Profile</h2>
                <form onSubmit={sendData}>
                    <label>
                        Nombre:
                        <input type="text" name="name" value={userForm.name} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Correo electrónico:
                        <input type="email" name="email" value={userForm.email} readOnly />
                    </label>
                    <br />
                    <label>
                        País:
                        <select name="country" value={userForm.country} onChange={handleChange}>
                            {countries.map((country, index) => (
                                <option key={index}>{country}</option>
                            ))}
                        </select>
                    </label>
                    <br />
                    <label>
                        Dirección:
                        <input type="text" name="address" value={userForm.address} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Ciudad:
                        <input type="text" name="city" value={userForm.City} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Estado:
                        <input type="text" name="state" value={userForm.State} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Teléfono:
                        <input type="text" name="phone" value={userForm.phone} onChange={handleChange} />
                    </label>
                    <br />
                    <button type="submit">Actualizar</button>
                </form>
            </div>
            <FooterPage />
        </React.Fragment>
    );
}





{/* <main className="mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="h-1/2 bg-gray-100"></div>
                    <div>
                        <form className="space-y-8" onSubmit={(e) => sendData(e)}>
                            <div className="space-y-8">

                                <div className="pt-8">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Tu información personal
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            (Recuerda que es un app con objetivos de aprendizaje. Introduce datos no reales 😉)
                                        </p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label for="first-name" className="block text-sm font-medium text-gray-700">
                                                Tu nombre
                                            </label>
                                            <div className="mt-1">
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    value={userForm.name}
                                                    onChange={(e) => { handleChange(e) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label for="last-name" className="block text-sm font-medium text-gray-700">
                                                Tus apellidos
                                            </label>
                                            <div className="mt-1">
                                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    value={userForm.lastname}
                                                    onChange={(e) => { handleChange(e) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label for="email" className="block text-sm font-medium text-gray-700">
                                                Tu correo
                                            </label>
                                            <div className="mt-1">
                                                <input id="email"
                                                    disabled name="email"
                                                    type="email"
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    onChange={(e) => { handleChange(e) }}
                                                    value={userForm.email}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label for="country" className="block text-sm font-medium text-gray-700">
                                                Tu país
                                            </label>

                                            <div className="mt-1">
                                                <select id="country" name="country" autocomplete="country" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    onChange={(e) => { handleChange(e) }}
                                                >

                                                    {
                                                        countries.map(e => {
                                                            return e === country ?
                                                                (
                                                                    <>
                                                                        <option
                                                                            value={e}
                                                                            selected
                                                                            value={e}>{e}
                                                                        </option>
                                                                    </>
                                                                )
                                                                :
                                                                (
                                                                    <>
                                                                        <option
                                                                            value={userForm.country}
                                                                            onChange={(e) => { handleChange(e) }}
                                                                            value={e}>{e}</option>
                                                                    </>
                                                                )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>


                                        <div className="sm:col-span-6">
                                            <label for="street-address" className="block text-sm font-medium text-gray-700">
                                                Dirección física (Incluye observaciones de ubicación)
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    type="text"
                                                    name="address"
                                                    value={userForm.address}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-1">
                                            <label for="city" className="block text-sm font-medium text-gray-700">
                                                Ciudad
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={userForm.city}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-1">
                                            <label for="state" className="block text-sm font-medium text-gray-700">
                                                Estado / Provincia
                                            </label>
                                            <div className="mt-1">
                                                <input type="text"
                                                    name="state"
                                                    value={userForm.state}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border text-sm border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-1">
                                            <label for="state" className="block text-sm font-medium text-gray-700">
                                                Código Postal
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={userForm.phone}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="p-1 border text-sm border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="pt-5">
                                <div className="flex justify-start">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Guardar cambios
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main> */}