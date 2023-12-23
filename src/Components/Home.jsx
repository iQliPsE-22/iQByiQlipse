// Home.jsx
import React from "react";
import Card from "./Card";
import "./home.css";
import User from "./User";
// import User from './User';
const Home = ({ handleBackground, handleSelectedCard }) => {
  const handleCardSelection = (value) => {
    handleSelectedCard(value);
  };
  handleBackground("RizzQuiz");
  return (
    <>
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
        <User/>

      </div>
    </>
  );
};

export default Home;
