// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/cursor.css";
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
import Footer from "./Components/Footer";
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
    setQuestions(questionsList);
  }, [questionsList]);

  useEffect(() => {
    console.log("Current Questions:", questions);
  }, [questions]);

  function updateScore(newScore) {
    setScore(newScore);
    console.log(score);
  }

  function handleBackground(value) {
    setBackground(value);
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
        setQuestions("");
    }
  }
  return (
    <>
    <div className="parent">
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
            path="/result"
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
          <Route
            path="/custom-quiz"
            element={
              <Quiz questions={questionsList} updateScore={updateScore} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
      <Footer />
      </>
  );
};

export default App;
