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
