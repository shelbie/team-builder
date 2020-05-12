import React from "react";

const Cards = props => {
  return (
    <div className="card-list">
      {props.cards.map(card => (
        <div className="card" key={card.name}>
          <h2>{card.email}</h2>
          <p>{card.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

