import { Card } from "./Card";
import "../App.css";
import { ContextContact } from "../context/ContextContact";
import { useContext } from "react";

export function ListCard() {
  const { cards } = useContext(ContextContact);

  if (cards.length === 0) {
    return <h1>No hay ningún contacto</h1>;
  }

  return (
    <div className="list-card">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
