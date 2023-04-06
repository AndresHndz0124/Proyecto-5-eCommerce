import React, { useState, useEffect, useContext } from 'react';
import Header from "./Header";
import FooterPage from "./footer";
import { UserContext } from '../context/userContext';
import clienteAxios from '../config/axios';

const handleUserLookup = async (email) => {
    try {
      const res = await clienteAxios.get(`https://app-ecommerce.onrender.com/Users?email=${email}`);
      const user = res.data[0];
      return user._id;
    } catch (error) {
      console.log(error);
    }
  };
export default function Profile() {
    const userCtx = useContext(UserContext);

    const { userSubmitForm } = userCtx;

    const { name, email, country, address, city, state, phone } = userCtx.user || {};

    const [userForm, setUserForm] = useState({
        id: "",
        name: "",
        lastname: "",
        country: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        email
      })

    let countries = [
        "-----",
        "México",
        "Colombia",
        "Perú",
        "Chile",
        "Otro país..."
    ];

    const handleChange = async (event) => {
        setUserForm({
            ...userForm,
            [event.target.name]: event.target.value
        });
    };

    // const sendData = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const res = await clienteAxios.put("https://app-ecommerce.onrender.com/Users/Update", {
    //             _id: userCtx.user._id,
    //             ...userForm
    //         });

    //         userSubmitForm(res.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    const handleUserLookup = async () => {
        const response = await fetch(`https://example.com/users?email=${userForm.email}`)
        const data = await response.json()
      
        if (data.length > 0) {
          const user = data[0]
      
          setUserForm(prevUserForm => ({
            ...prevUserForm,
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            country: user.country,
            address: user.address,
            city: user.city,
            state: user.state,
            zipcode: user.zipcode,
          }))
        }
      }
      

    const sendData = async (event) => {
        event.preventDefault();
        try {
            await clienteAxios.put("/Users/Update", {
                _id: userCtx.user._id,
                name: userForm.name,
                email: userCtx.user.email,
                country: userForm.country,
                address: userForm.address,
                city: userForm.city,
                state: userForm.state,
                phone: userCtx.user.phone,
            });
            userSubmitForm(userForm);
            alert("User updated successfully");
        } catch (error) {
            console.error(error);
            alert("An error occurred while updating the user");
        }
    };
    

    useEffect(() => {
        setUserForm({
            name,
            country,
            address,
            city,
            state,
            phone,
            email
        });
    }, [name, country, address, city, state, phone, email]);

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
                        <input type="text" name="city" value={userForm.city} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Estado:
                        <input type="text" name="state" value={userForm.state} onChange={handleChange} />
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
                                                    name="zipcode"
                                                    value={userForm.zipcode}
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