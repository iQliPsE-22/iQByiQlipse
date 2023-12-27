import React from "react";
import "./result.css";

const Result = ({ score, questions, handleBackground }) => {
  const back = score;
  const total = questions.length;
  handleBackground(back + "/" + total); // Divide the score by the total number of questions
  return (
    <div className="result">
      <h1 id="info">
        Congratulations on completing the quiz! You scored {score} /{" "}
        {questions.length}.
      </h1>
    </div>
  );
};

export default Result;
