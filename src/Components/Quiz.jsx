import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Quiz = ({ updateScore, questions }) => {
  const navigate = useNavigate();
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(100);
  const [currOption, setCurrentOption] = useState("");

  //for timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) setTimeRemaining((prevTime) => prevTime - 1);
      else navigate("/Result");
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining, currentQues]);

  function handleOption(e, optionIndex) {
    setSelectedOption(optionIndex);
    setCurrentOption(e.target.textContent);
  }
  function handleNext(e, optionIndex) {
    currentQues < questions.length - 1 &&
      setCurrentQues((prevQues) => prevQues + 1);
    setSelectedOption(null);
    console.log(currOption);
    if (currOption === questions[currentQues].correct)
      setScore((prevScore) => prevScore + 1);
  }
  function handleResult() {
    updateScore(score);
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
            <li
              id="option-1"
              className={`option ${selectedOption === 0 ? "clicked" : ""}`}
              onClick={(e) => handleOption(e, 0)}
            >
              {questions[currentQues].option1}
            </li>
            <li
              id="option-2"
              className={`option ${selectedOption === 1 ? "clicked" : ""}`}
              onClick={(e) => handleOption(e, 1)}
            >
              {questions[currentQues].option2}
            </li>
            <li
              id="option-3"
              className={`option ${selectedOption === 2 ? "clicked" : ""}`}
              onClick={(e) => handleOption(e, 2)}
            >
              {questions[currentQues].option3}
            </li>
            <li
              id="option-4"
              className={`option ${selectedOption === 3 ? "clicked" : ""}`}
              onClick={(e) => handleOption(e, 3)}
            >
              {questions[currentQues].option4}
            </li>
          </ul>
          <div className="res">
            {currentQues < questions.length - 1 && (
              <button onClick={handleNext} id="res-btn">
                Next
              </button>
            )}
            {currentQues === questions.length - 1 && (
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
