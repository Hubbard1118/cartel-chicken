import React from 'react';

// component for Card  that 
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.name} />
      <div className="card-body">
        <h2>{props.name}</h2>
        <p>{props.atomicMass}</p>
        <p>{props.atomicNumber}</p>
      </div>
    </div>
  );
};

export default Card;
