// Home.jsx
import React from "react";
import Card from "./Card";
import "./home.css";
import User from "./User";
import { useNavigate } from "react-router-dom";

const Home = ({ handleBackground, handleSelectedCard }) => {
  const navigate = useNavigate();
  const handleCardSelection = (value) => {
    handleSelectedCard(value);
  };
  handleBackground("RizzQuiz");
  function handleClick() {
    navigate("/custom-ques");
  }
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
          <Card
            value="Custom"
            handleSelectedCard={handleCardSelection}
            onClick={handleClick}
          />
        </div>
        <User />
      </div>
    </>
  );
};

export default Home;
