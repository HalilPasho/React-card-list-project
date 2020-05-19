import React from 'react';
import './card.css';

export default function card(props) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`}
      />
      <h2>{props.item.name}</h2>
      <p>{props.item.email}</p>
    </div>
  );
}
