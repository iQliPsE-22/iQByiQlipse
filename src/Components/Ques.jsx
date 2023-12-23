import React, { useState } from "react";
import "../App.css";
import "./Ques.css";
function Ques() {
  const [num, setNum] = useState(1);
  const [ques, setQues] = useState("");
  const [newQues, setNewQues] = useState([]);
  const [options, setOptions] = useState(["", "", "", ""]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(ques);
    console.log(options);
  }

  function handleOptionChange(index, value) {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  }

  function handleNext() {
    const newQuestion = { question: ques, options: [...options] };
    setNewQues([...newQues, newQuestion]);
    console.log("Last newQues and Options:", newQues);
    setQues("");
    setOptions(["", "", "", ""]);
    setNum((preNum) => preNum + 1);
  }

  return (
    <div className="container">
      <div className="back-container">
        <div className="question-container">
          <div id="num-circle">
            <h1 id="num">{num}</h1>
          </div>
          <form className="ques-form" onSubmit={handleSubmit}>
            <input
              id="ques-text"
              value={ques}
              type="text"
              onChange={(e) => setQues(e.target.value)}
            />
            <br />
            <div className="options">
              <input
                className="option"
                type="text"
                placeholder="Option 1"
                id="option-1"
                value={options[0]}
                onChange={(e) => handleOptionChange(0, e.target.value)}
              />

              <input
                className="option"
                type="text"
                placeholder="Option 2"
                id="option-2"
                value={options[1]}
                onChange={(e) => handleOptionChange(1, e.target.value)}
              />

              <input
                className="option"
                type="text"
                placeholder="Option 3"
                id="option-3"
                value={options[2]}
                onChange={(e) => handleOptionChange(2, e.target.value)}
              />

              <input
                className="option"
                type="text"
                placeholder="Option 4"
                id="option-4"
                value={options[3]}
                onChange={(e) => handleOptionChange(3, e.target.value)}
              />
            </div>
            <div className="res">
              <input
                id="res-btn"
                type="submit"
                value="Save"
                onClick={handleSubmit}
              />
              <button id="res-btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Ques;
