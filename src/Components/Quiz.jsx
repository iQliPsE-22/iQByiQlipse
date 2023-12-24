import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Quiz = ({ updateScore, questions }) => {
  const navigate = useNavigate();
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(100);
  const [currOption, setCurrentOption] = useState("");

  // for timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(timer);
      navigate("/Result");
    }

    return () => clearInterval(timer);
  }, [timeRemaining, navigate]);

  function handleOption(e, optionIndex) {
    setSelectedOption(optionIndex);
    setCurrentOption(e.target.textContent);
  }

  function handleNext() {
    setCurrentQues((prevQues) => prevQues + 1);
    setSelectedOption(null);

    if (currOption === questions[currentQues].correct) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function handleResult() {
    let x = 0;
    if (currOption === questions[currentQues].correct) {
      x = 1;
    }
    updateScore(score + x);
    navigate("/Result");
  }

  return (
    <div className="container">
      <div className="back-container">
        <div className="question-container">
          <div id="num-circle">
            <h2 id="num">{currentQues + 1 + "/" + questions.length} </h2>
            <h2 id="num">{timeRemaining}</h2>
          </div>
          <h1 id="ques-h1">{questions[currentQues].ques}</h1>
          <ul className="options">
            {questions[currentQues].options.map((option, index) => (
              <li
                key={index}
                id={`option-${index + 1}`}
                className={`option ${selectedOption === index ? "clicked" : ""}`}
                onClick={(e) => handleOption(e, index)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="res">
            {currentQues < questions.length - 1 ? (
              <button onClick={handleNext} id="res-btn">
                Next
              </button>
            ) : (
              <button onClick={handleResult} id="res-btn">
                Results
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
