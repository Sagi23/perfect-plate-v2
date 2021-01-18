import React from "react";
import "../styles/PlateList.css";
function PlateList({ plate }) {
  const renderdPlate = plate.map((item) => (
    <div className="content">
      <p>{item.item},</p>
      <p>{item.amount},</p>
      <p className="pro1">{item.pro},</p>
      <p className="cal1">{item.cal},</p>
      <p className="fat1">{item.fat}</p>
    </div>
  ));
  const calAmount = plate.map((item) => item.cal);
  const proAmount = plate.map((item) => item.pro);
  const fatAmount = plate.map((item) => item.fat);

  const totalCalAmount = calAmount.reduce((acc, i) => (acc += i), 0).toFixed(2);
  const totalProAmount = proAmount.reduce((acc, i) => (acc += i), 0).toFixed(2);
  const totalFatAmount = fatAmount.reduce((acc, i) => (acc += i), 0).toFixed(2);

  return (
    <div className="landing-right">
      <p class="head">My Plate</p>
      <div class="titles">
        <p>name</p>
        <p>serving size</p>
        <p>protein</p>
        <p>calories</p>
        <p>fat</p>
      </div>
      <>{renderdPlate}</>
      <div className="total">
        <div className="total-result-area">
          <div className="total-protein card">
            <p className="pro1">{totalProAmount}</p>
            <p className="title">protein</p>
          </div>
          <div className="total-cal card">
            <p className="cal1">{totalCalAmount}</p>
            <p className="title">calories</p>
          </div>
          <div className="total-fat card">
            <p className="fat1">{totalFatAmount}</p>
            <p className="title">fat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlateList;
