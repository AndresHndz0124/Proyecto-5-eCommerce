import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';
import clienteAxios from '../config/axios';
import { toast } from 'react-toastify';

export default function Profile() {

    const userCtx = useContext(UserContext);
    const { userSubmitForm } = userCtx;

    const [userForm, setUserForm] = useState({
        username: "",
        email: "",
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
                username: userForm.username,
                // email: userForm.user.email,
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
            toast.success(`User updated successfully`)
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while updating the user");
        }
    };

    if (loading) {
        return <div>Loading...</div>
    }



    return (
        <form onSubmit={sendData}>

            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username" name="username" value={userForm.username} onChange={handleChange} />
            </div>
            <br />

            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Teléfono</label>
                <input type="tel" className="form-control" id="formGroupExampleInput" placeholder="Phone number" name="phone" value={userForm.phone} onChange={handleChange} />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    name="email" value={userForm.email} readOnly />
                <small id="emailHelp" className="ayuda">We'll never share your email with anyone else.</small>
            </div>
            <br />

            <div className="form-row">
                <div className="Address_Data">
                <div class="form-group col-md-4">
                        <label htmlFor="inputCountry">País</label>
                        <select class="form-control" name="country" value={userForm.country} onChange={handleChange}>
                            {countries.map((country, index) => (
                                <option key={index}>{country}</option>
                            ))}                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label htmlFor="inputCity">Ciudad</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" name="City" value={userForm.City} onChange={handleChange} />
                    </div>
                    <div class="form-group col-md-4">
                        <label htmlFor="inputState">Estado</label>
                        <input type="text" className="form-control" id="inputState" placeholder="State" name="State" value={userForm.State} onChange={handleChange}/>
                    </div>
                </div>
            </div>

            <br />
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Dirección</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="address" rows="3" name="address" value={userForm.address} onChange={handleChange}></textarea>
            </div>
            <br />
            <div className="Boton_summit"><button type="submit" className="btn btn-warning">Summit</button></div>
        </form>
    );
}
