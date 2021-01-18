import React from "react";
import "../styles/ResultArea.css";

function ResultItem({ pro, cal, fat }) {
  return (
    <div className="result-area">
      <div className="protein card">
        <p>{pro}</p>
        <p className="title">protein</p>
      </div>
      <div className="cal card">
        <p>{cal}</p>
        <p className="title">calories</p>
      </div>
      <div className="fat card">
        <p>{fat}</p>
        <p className="title">fat</p>
      </div>
    </div>
  );
}

export default ResultItem;
