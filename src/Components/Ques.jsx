import React, { useState } from "react";
import "../App.css";
import "./Ques.css";
// import { useNavigate } from "react-router-dom";

function Ques({ handleSetQuestionsList }) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionText, setQuestionText] = useState("");
  const [optionsList, setOptionsList] = useState(["", "", "", ""]);

  function handleSubmit(e) {
    e.preventDefault();
    const newQuestion = { question: questionText, options: [...optionsList] };
    handleSetQuestionsList(newQuestion);
  }

  function handleOptionChange(index, value) {
    const newOptions = [...optionsList];
    newOptions[index] = value;
    setOptionsList(newOptions);
  }

  function handleNext() {
    const newQuestion = { question: questionText, options: [...optionsList] };
    handleSetQuestionsList(newQuestion);
    setQuestionText("");
    setOptionsList(["", "", "", ""]);
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
  }

  return (
    <div className="container">
      <div className="back-container">
        <div className="question-container">
          <div id="num-circle">
            <h1 id="num">{questionNumber}</h1>
          </div>
          <form className="ques-form" onSubmit={handleSubmit}>
            <input
              id="ques-text"
              value={questionText}
              type="text"
              onChange={(e) => setQuestionText(e.target.value)}
            />
            <br />
            <div className="options">
              <input
                className="option"
                type="text"
                placeholder="Option 1"
                id="option-1"
                value={optionsList[0]}
                onChange={(e) => handleOptionChange(0, e.target.value)}
              />

              <input
                className="option"
                type="text"
                placeholder="Option 2"
                id="option-2"
                value={optionsList[1]}
                onChange={(e) => handleOptionChange(1, e.target.value)}
              />

              <input
                className="option"
                type="text"
                placeholder="Option 3"
                id="option-3"
                value={optionsList[2]}
                onChange={(e) => handleOptionChange(2, e.target.value)}
              />

              <input
                className="option"
                type="text"
                placeholder="Option 4"
                id="option-4"
                value={optionsList[3]}
                onChange={(e) => handleOptionChange(3, e.target.value)}
              />
            </div>
            <div className="res">
              <button id="res-btn" onClick={handleNext}>
                Next
              </button>
              <input
                id="res-btn"
                type="submit"
                value="Save"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ques;
