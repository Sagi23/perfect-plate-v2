import React from "react";
import "../styles/PlateList.css";
import PlateItem from "./PlateItem";
import ResultItem from "./ResultItem";
function PlateList({ plate, setPlate }) {
  const removeItem = (id) => {
    const newPlate = plate.filter((item) => (item.id !== id ? plate : ""));
    setPlate(newPlate);
  };

  const renderdPlate = plate.map((item) => (
    <PlateItem
      handleClick={removeItem}
      key={item.id}
      item={item.item}
      amount={item.amount}
      pro={item.pro}
      cal={item.cal}
      fat={item.fat}
      id={item.id}
    />
  ));
  const calAmount = plate.map((item) => item.cal);
  const proAmount = plate.map((item) => item.pro);
  const fatAmount = plate.map((item) => item.fat);

  const totalCalAmount = calAmount.reduce((acc, i) => (acc += i), 0).toFixed(2);
  const totalProAmount = proAmount.reduce((acc, i) => (acc += i), 0).toFixed(2);
  const totalFatAmount = fatAmount.reduce((acc, i) => (acc += i), 0).toFixed(2);

  return (
    <div className="landing-right">
      <p className="head">My Plate</p>
      <div className="titles">
        <p>name</p>
        <p>serving size</p>
        <p>protein</p>
        <p>calories</p>
        <p>fat</p>
        <p>Delete</p>
      </div>
      <div className="container">{renderdPlate}</div>
      <div className="total-result-area">
        <ResultItem
          cal={totalCalAmount}
          pro={totalProAmount}
          fat={totalFatAmount}
        />
      </div>
    </div>
  );
}

export default PlateList;
