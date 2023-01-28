import { createContext, useState, useEffect } from "react";
import { data } from "../data/data";

export const ContextContact = createContext();

export function ContextContactProvider(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  function createSchudle(card) {
    setCards([
      ...cards,
      {
        id: cards.length,
        firstName: card.firstname,
        lastName: card.lastname,
        address: card.address,
        numberPhone: card.numberPhone,
        image: "https://robohash.org/user" + cards.length,
      },
    ]);
  }

  function deleteSchudele(cardId) {
    setCards(cards.filter((card) => card.id != cardId)); //Si card.id es igual al id que se pase. Entonces eliminar en caso contrario dejarlo.
  }

  function updateSchedele(card) {
    console.log(card)
    const value = cards.findIndex((e) => e.id === card.id);
    cards.splice(value, 1, {
      id: card.id,
      firstName: card.firstname,
      lastName: card.lastname,
      address: card.address,
      numberPhone: card.numberPhone,
      image: "https://robohash.org/user" + card.id,
    })
    setCards(
      cards.map((e) => e)
    );
  }

  function recoverSchedele(card) {
    const dataCard = cards.find((e) => e.id == card.id);
    return dataCard;
  }

  return (
    <ContextContact.Provider
      value={{
        cards: cards,
        createSchudle: createSchudle,
        deleteSchudele: deleteSchudele,
        updateSchedele: updateSchedele,
        recoverSchedele: recoverSchedele
      }}
    >
      {props.children}
    </ContextContact.Provider>
  );
}
