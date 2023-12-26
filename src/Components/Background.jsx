import React from "react";

import "./background.css";
const Background = ({ background }) => {
  return (
    <div className="background-container">
      <h1
        id="background"
        className={
          background === "Current_Affairs"  ? "smaller" : ""
        }
      >
        {background}
      </h1>
    </div>
  );
};

export default Background;
