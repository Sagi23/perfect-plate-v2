import React from "react";
import uuid from "uuid/dist/v4";

function ResultItem({ pro, cal, fat, setPlate, item, amount, plate }) {
  const handleClick = () => {
    setPlate([{ item, amount, pro, cal, fat, id: uuid() }, ...plate]);
  };

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
      <button className="btn" onClick={handleClick}>
        add to plate
      </button>
    </div>
  );
}

export default ResultItem;
