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
import Header from "./Components/Header";
import Ques from "./Components/Ques";
const App = () => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [background, setBackground] = useState("RizzQuiz");
  const [questionsList, setQuestionsList] = useState([]);

  function handleSetQuestionsList(newQuestions) {
    setQuestionsList((prevQuestionsList) => [
      ...prevQuestionsList,
      newQuestions,
    ]);
    console.log("Questions List:", questionsList);
  }

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
        setQuestions(questionsList);
    }
  }
  return (
    <div className="Parent">
      <Header />
      <Background background={background} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSelectedCard={handleSelectedCard}
                handleBackground={handleBackground}
              />
            }
          />
          <Route
            path="/quiz"
            element={<Quiz questions={questions} updateScore={updateScore} />}
          />
          <Route
            path="/eesult"
            element={
              <Result
                score={score}
                questions={questions}
                handleBackground={handleBackground}
              />
            }
          />
          <Route
            path="/custom-ques"
            element={<Ques handleSetQuestionsList={handleSetQuestionsList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
