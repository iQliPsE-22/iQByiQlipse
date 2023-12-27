// Home.jsx
import React from "react";
import Card from "./Card";
import "./home.css";
// import User from "./User";
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

  function handleExploreClick() {
    const homeContainer = document.getElementById("nav");
    homeContainer.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div id="home-container">
        <div className="content">
          <h2>Welcome to RizzQuiz: The Ultimate Trivia Adventure!</h2>
          <h3>
            Prepare to embark on a thrilling journey of knowledge and excitement
            with Rizz Quiz! Whether you're a seasoned trivia master or just
            getting started, Rizz Quiz offers an unparalleled quiz experience
            that's both fun and challenging.
          </h3>
          <button className="start" onClick={handleExploreClick}>
            Explore
          </button>
          <button className="start" onClick={handleClick}>
            Customize
          </button>
        </div>
      </div>
      <div id="nav-container">
        <div className="nav" id="nav">
          <Card value="Sports" handleSelectedCard={handleCardSelection} />
          <Card value="Space" handleSelectedCard={handleCardSelection} />
          <Card value="History" handleSelectedCard={handleCardSelection} />
          <Card value="Reasoning" handleSelectedCard={handleCardSelection} />
          <Card
            value="Current_Affairs"
            handleSelectedCard={handleCardSelection}
          />
          <Card value="Technology" handleSelectedCard={handleCardSelection} />
          <div className="card" onClick={handleClick}>
            <h2>Custom</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
