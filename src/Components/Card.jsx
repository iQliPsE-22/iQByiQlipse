<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
const Card = ({ value, handleSelectedCard }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    handleSelectedCard(value);
    navigate("/Quiz");
  };
  return (
    <div className="card" id={value} onClick={handleClick}>
      <h2>{value}</h2>
    </div>
  );
};

export default Card;
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
const Card = ({ value, handleSelectedCard }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    handleSelectedCard(value);
    navigate("/Quiz");
  };
  return (
    <div className="card" id={value} onClick={handleClick}>
      <h2>{value}</h2>
    </div>
  );
};

export default Card;
>>>>>>> fd8079f5db48911cf9ce54c2b787b85b19833b2e
