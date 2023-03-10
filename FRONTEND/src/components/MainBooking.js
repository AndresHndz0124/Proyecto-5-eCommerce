import React from 'react'
import { useState, useEffect } from "react"
import { db } from "../Pages/firebae-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
// import { async } from "@firebase/util";


function Mainbooking() {
    // const [NewName, SetNewName] = useState("")
    // const [NewPhone, SetPhone] = useState(0)
    // const [NewEmail, SetEmail] = useState("")
    // const [NewSize, SetSize] = useState(0)

    const [Viewers, SetViewer] = useState([])
    const ViewersCollection = collection(db, "Viewers")

    // const createReserv = async () => {
    //     await addDoc(UsersCollectioRef, { name: NewName, Phone: Number(NewPhone), email: NewEmail, size: Number(NewSize) })
    // }

    // const UpdateReserv = async (id, size) => {
    //     const userDoc = doc(db, "Viewers", id)
    //     const newFields = { size: size + 2 }
    //     await updateDoc(userDoc, newFields)
    // }

    const deleteReserv = async (id) => {
        const userDoc = doc(db, "Viewers", id)
        await deleteDoc(userDoc);
        window.location.reload()
    }
    useEffect(() => {
        const GetUsers = async () => {
            const data = await getDocs(ViewersCollection)
            SetViewer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        GetUsers()
    }, [])

    return (
        <div className='main'>
            {Viewers.map((user) => {
                return (
                    <div className='card'>
                        <div className='card_separate'>
                            <h4>Nombre: {user.name}</h4>
                            <p>Telefono: {user.Phone}</p>
                            <p>Email: {user.email}</p>
                            <p>Numero de personas: {user.Number_persons}</p>
                            <p>Fecha: {user.Date}</p>
                        </div>
                        <button type="button" class="btn btn-danger" onClick={() => { deleteReserv(user.id) }}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}
export default Mainbooking
