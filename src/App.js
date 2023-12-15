// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import {
  sports,
  space,
  history,
  reasoning,
  current_Affairs,
  technology,
} from "./Components/QuesSet.jsx";
import Home from "./Components/Home.jsx";
import Background from "./Components/Background";

const App = () => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [background, setBackground] = useState("RizzQuiz");

  useEffect(() => {
    console.log("Updated Questions:", questions);
  }, [questions]);

  function updateScore(newScore) {
    setScore(newScore);
  }
  function handleBackground() {
    setBackground("RizzQuiz");
  }
  function handleSelectedCard(cardValue) {
    setBackground(cardValue);
    switch (cardValue) {
      case "Sports":
        setQuestions(sports);
        break;
      case "Space":
        setQuestions(space);
        break;
      case "History":
        setQuestions(history);
        break;
      case "Reasoning":
        setQuestions(reasoning);
        break;
      case "Current_Affairs":
        setQuestions(current_Affairs);
        break;
      case "Technology":
        setQuestions(technology);
        break;
      default:
        setQuestions(sports);
    }
  }

  return (
    <div className="Parent">
      <Background background={background} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/iQByiQlipse"
            element={
              <Home
                handleSelectedCard={handleSelectedCard}
                handleBackground={handleBackground}
              />
            }
          />
          <Route
            path="/Quiz"
            element={<Quiz questions={questions} updateScore={updateScore} />}
          />
          <Route
            path="/Result"
            element={
              <Result
                score={score}
                questions={questions}
                handleBackground={handleBackground}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
