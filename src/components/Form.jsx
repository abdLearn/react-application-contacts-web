import {useState, useEffect, useContext} from "react"
import {ContextContact} from "../context/ContextContact"

export function Form(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [telephone, setTelephone] = useState("");

    const {createSchudle} = useContext(ContextContact);


    //Para el clic del formulario
    const handSubmit = (evento) =>{
        evento.preventDefault();
        //Code send Form
        createSchudle({
            firstname: firstName,
            lastname: lastName,
            address: address,
            numberPhone: telephone
        })
        //Clear box input
        setFirstName("");
        setLastName("");
        setAddress("");
        setTelephone("");
    }


    return(
        <div className="form-submit">
            <form onSubmit={handSubmit}>
                <h1>Mis Contactos</h1>
                <label htmlFor="name">First Name</label>
                <input
                className="item-input" 
                id="name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Write your first name"
                required
                />
                <label htmlFor="lastname">Last Name</label>
                <input
                className="item-input"
                id="lastname"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Write your last name"
                required
                />
                <label htmlFor="phone">Telephone</label>
                <input
                className="item-input"
                id="phone"
                type="tel"
                onChange={(e) => setTelephone(e.target.value)}
                value={telephone}
                placeholder="xxx xxx xxx"
                required
                />
                <label htmlFor="address">Address</label>
                <input
                className="item-input"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="Write your address"
                />
                <button
                className="btn-anadir"
                >Añadir Contacto</button>
            </form>
        </div>
    );
}