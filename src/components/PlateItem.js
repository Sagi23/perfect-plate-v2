import React from "react";

function PlateItem({ item, amount, pro, cal, fat, id, handleClick }) {
  return (
    <div className="content">
      <button onClick={() => handleClick(id)}>X</button>
      <p>{item},</p>
      <p>{amount},</p>
      <p className="pro1">{pro},</p>
      <p className="cal1">{cal},</p>
      <p className="fat1">{fat}</p>
    </div>
  );
}

export default PlateItem;
