import React, { useState, useEffect } from "react"
import { db } from "../Pages/firebae-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { async } from "@firebase/util";

function ContactForm() {


    const [formData, setFormData] = useState({
        CreateName: "",
        CreateEmail: "",
        CreatePhone: "",
        CreateComments: "",
        CreateNumberPersons: "",
        CreateDate: "",
    });

    const [Viewers, SetViewer] = useState([])
    const ViewersCollection = collection(db, "Viewers")


    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        resetForm()
    };

    const create_comments = async () => {
        await addDoc(ViewersCollection, { 
            name: formData.CreateName, 
            Phone: Number(formData.CreatePhone),
            email: formData.CreateEmail, 
            Comment: formData.CreateComments, 
            Number_persons: formData.CreateNumberPersons,
            Date: formData.CreateDate, })
    }


    const resetForm = () => {
        setFormData({
            CreateName: "",
            CreateEmail: "",
            CreatePhone: "",
            CreateComments: "",
            CreateNumberPersons: "",
            CreateDate: "",
        });
    };

    useEffect(() => {
        const GetUsers = async () => {
            const data = await getDocs(ViewersCollection)
            SetViewer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        GetUsers()
    }, [])


    return (
        <form onSubmit={handleSubmit}>

            <div class="form-group">
                <label for="formGroupExampleInput">Nombre</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" name="CreateName" value={formData.CreateName} onChange={handleChange} />
            </div>
            <br />

            <div class="form-group">
                <label for="formGroupExampleInput">Teléfono</label>
                <input type="tel" class="form-control" id="formGroupExampleInput" placeholder="Phone number" name="CreatePhone" value={formData.CreatePhone} onChange={handleChange} />
            </div>
            <br />
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    name="CreateEmail" value={formData.CreateEmail} onChange={handleChange} />
                <small id="emailHelp" class="ayuda">We'll never share your email with anyone else.</small>
            </div>
            <br />

            <div class="form-group">
                <div className="Booking_data">
                    <div>
                        <label for="formGroupExampleInput">Numero de personas</label>
                        <input type="number" class="form-control" name="CreateNumberPersons" value={formData.CreateNumberPersons} onChange={handleChange} />
                    </div>
                    <div>
                        <label for="formGroupExampleInput">Fecha</label>
                        <input type="date" class="form-control" name="CreateDate" value={formData.CreateDate} onChange={handleChange} />
                    </div>
                </div>
            </div>

            <br />
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Descripción</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Messages and Comments" rows="3" name="CreateComments" value={formData.CreateComments} onChange={handleChange}></textarea>
            </div>
            <br />
            <div className="Boton_summit"><button type="submit" class="btn btn-warning" onClick={create_comments}>Summit</button></div>
            {/* <div className="Boton_summit"><button type="submit" class="btn btn-warning">Summit</button></div> */}
        </form>
    );
}

export default ContactForm;