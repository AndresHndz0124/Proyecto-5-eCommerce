import React from "react"
import { db } from "../Pages/firebae-config"
import { collection, doc, deleteDoc } from "firebase/firestore"

export default function Cards(props) {
    const { items } = props;

    const ViewersCollection = collection(db, "Viewers")

    const deleteReserv = async (id) => {
        const userDoc = doc(db, "Viewers", id)
        await deleteDoc(userDoc);
        window.location.reload()
    }

    // const DeleteCards = async (hla) => {
    //     console.log(`Estas parado en${hla}`)
    //         }

    return (
        items.map((item) => {
            return (
                <div className='card'>
                    <div className='card_separate'>
                        <h4>Nombre: {item.name}</h4>
                        <p>Telefono: {item.Phone}</p>
                        <p>Email: {item.email}</p>
                        <p>Numero de personas: {item.Number_persons}</p>
                        <p>Fecha: {item.Date}</p>
                    </div>
                    <button type="button" class="btn btn-danger" onClick={() => { deleteReserv(item.id) }}>Delete</button>
                </div>
            )
        })
    )
}