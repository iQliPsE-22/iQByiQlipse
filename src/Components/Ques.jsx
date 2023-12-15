import "./Ques.css";
import { useState } from "react";
function Ques() {
  const [num, setNum] = useState(1);
  const [ques, setQues] = useState("");
  const [questions, setQuestions] = useState([]);
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
    setQuestions([...questions, newQuestion]);
    console.log("Last Questions and Options:", questions);
    setQues("");
    setOptions(["", "", "", ""]);
    setNum((preNum) => preNum + 1);
  }

  return (
    <div className="ques-container">
      <div className="ques">
        <h1 id="ques-h1">{num}</h1>
        <form className="ques-form" onSubmit={handleSubmit}>
          <input
            id="ques-text"
            value={ques}
            type="text"
            onChange={(e) => setQues(e.target.value)}
          />
          <br />
          <div id="option">
            <input
              className="options"
              type="text"
              placeholder="Option 1"
              id="option-1"
              value={options[0]}
              onChange={(e) => handleOptionChange(0, e.target.value)}
            />

            <input
              className="options"
              type="text"
              placeholder="Option 2"
              id="option-2"
              value={options[1]}
              onChange={(e) => handleOptionChange(1, e.target.value)}
            />

            <input
              className="options"
              type="text"
              placeholder="Option 3"
              id="option-3"
              value={options[2]}
              onChange={(e) => handleOptionChange(2, e.target.value)}
            />

            <input
              className="options"
              type="text"
              placeholder="Option 4"
              id="option-4"
              value={options[3]}
              onChange={(e) => handleOptionChange(3, e.target.value)}
            />
          </div>
          <div className="btns">
            <input
              id="ques-submit"
              type="Submit"
              value="Save"
              onClick={handleSubmit}
            />
            <button id="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Ques;
