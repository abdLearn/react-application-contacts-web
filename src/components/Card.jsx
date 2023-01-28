import { Children, useContext, useState } from "react";
import { ContextContact } from "../context/ContextContact";
import "../App.css";
import {MdLocationCity} from "react-icons/md"
import {MdPhoneAndroid} from "react-icons/md"

import {Modal} from "../components/Modal"
import { FormUpdate } from "./FormUpdate";

//Falta construir el card
export function Card({card}) {

  const {deleteSchudele} = useContext(ContextContact);
  const {recoverSchedele} = useContext(ContextContact);
  const [activo, setActivo] = useState(false);

  //Crear un dialog para editar el dato

  return (
    <>
    <div className="card">
      <img className="image item" src={card.image}/>
      <h2 className="item">{card.firstName}</h2>
      <h2 className="item">{card.lastName}</h2>
      <p className="item"><MdLocationCity/> {card.address}</p>
      <p className="item"><MdPhoneAndroid/> {card.numberPhone}</p>
      <span className="item">
        <button className="btn-update" onClick={() => setActivo(!activo)}>Update</button>
        <button className="btn-delete" onClick={() => deleteSchudele(card.id)}>Delete</button>
      </span>
    </div>
    <Modal 
    status={activo}
    changeStatus={setActivo}
    >
      <FormUpdate 
      card = {card}
      changeStatus={setActivo}
      />
    </Modal>
    </>
  );
}

