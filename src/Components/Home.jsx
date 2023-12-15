<<<<<<< HEAD
// Home.jsx
import React from "react";
import Card from "./Card";
import "./home.css";
const Home = ({ handleBackground, handleSelectedCard }) => {
  const handleCardSelection = (value) => {
    handleSelectedCard(value);
  };
  handleBackground("Quiz");
  return (
    <div>
      <div className="nav">
        <Card value="Sports" handleSelectedCard={handleCardSelection} />
        <Card value="Space" handleSelectedCard={handleCardSelection} />
        <Card value="History" handleSelectedCard={handleCardSelection} />
        <Card value="Reasoning" handleSelectedCard={handleCardSelection} />
        <Card
          value="Current_Affairs"
          handleSelectedCard={handleCardSelection}
        />
        <Card value="Technology" handleSelectedCard={handleCardSelection} />
      </div>
    </div>
  );
};

export default Home;
=======
// Home.jsx
import React from "react";
import Card from "./Card";
import "./home.css";
const Home = ({ handleBackground, handleSelectedCard }) => {
  const handleCardSelection = (value) => {
    handleSelectedCard(value);
  };
  handleBackground("Quiz");
  return (
    <div>
      <div className="nav">
        <Card value="Sports" handleSelectedCard={handleCardSelection} />
        <Card value="Space" handleSelectedCard={handleCardSelection} />
        <Card value="History" handleSelectedCard={handleCardSelection} />
        <Card value="Reasoning" handleSelectedCard={handleCardSelection} />
        <Card
          value="Current_Affairs"
          handleSelectedCard={handleCardSelection}
        />
        <Card value="Technology" handleSelectedCard={handleCardSelection} />
      </div>
    </div>
  );
};

export default Home;
>>>>>>> fd8079f5db48911cf9ce54c2b787b85b19833b2e
