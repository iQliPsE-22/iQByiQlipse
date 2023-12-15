import React from "react";
import "./result.css"
const Result = ({ score, questions,handleBackground}) => {
  return (
    <div className="result">
      <h1>
        Your Score
        <br />
        {score}/{questions.length}
      </h1>
    </div>
  );
};

export default Result;
