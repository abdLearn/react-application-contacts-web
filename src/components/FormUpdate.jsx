import {useState, useContext} from "react";
import {ContextContact} from "../context/ContextContact"
import styled from "styled-components";

export function FormUpdate({card, changeStatus}){

    console.log(card);

    const [id, setId] = useState(card.id);
    const [firstName, setFirstName] = useState(card.firstName);
    const [lastName, setLastName] = useState(card.lastName);
    const [address, setAddress] = useState(card.address);
    const [telephone, setTelephone] = useState(card.numberPhone);

    const {updateSchedele} = useContext(ContextContact);


    //Para el clic del formulario
    const handSubmit = (evento) =>{//Falta corregir la actualización
        evento.preventDefault();
        //Code send Form
        updateSchedele({
            id: id,
            firstname: firstName,
            lastname: lastName,
            address: address,
            numberPhone: telephone
        })
        changeStatus(false)
        //Clear box input
        /*
        setFirstName("");
        setLastName("");
        setAddress("");
        setTelephone("");*/
    }


    return(
        <div className="form-submit">
            <form onSubmit={handSubmit}>
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
                required
                />
                <button
                className="btn-anadir"
                >Update contact</button>
            </form>
        </div>
    );

}


const Button = styled.button`
    
`
