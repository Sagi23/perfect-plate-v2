import React from "react";
import "../styles/SearchItemForm.css";
import useInputState from "../hooks/useInputState";
import ResultItem from "./ResultItem";
import uuid from "uuid/dist/v4";

function SearchItemForm({ getData, cal, pro, fat, setPlate, plate }) {
  const [item, handleItemChange] = useInputState("");
  const [amount, handleAmountChange] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(amount, item);
    // resetItem();
    // resetAmount();
  };

  const handleClick = () => {
    setPlate([{ item, amount, pro, cal, fat, id: uuid() }, ...plate]);
  };

  return (
    <div className="landing-left">
      <p className="head">Enter an item and a serving size</p>
      <form className="form1" onSubmit={handleSubmit}>
        <label htmlFor="item">Item:</label>
        <br />
        <input
          value={item}
          onChange={handleItemChange}
          type="text"
          name="item"
          id="item"
          required
          placeholder="e.g: Banana"
        />
        <br />
        <label htmlFor="size">Serving Size:</label>
        <br />
        <input
          value={amount}
          onChange={handleAmountChange}
          className="size"
          id="size"
          type="number"
          name="size"
          required
          placeholder="e.g: 200"
        />
        <span>gr</span>
        <br />
        <div className="to-center">
          <button className="btn">result</button>
        </div>
      </form>
      <ResultItem cal={cal} pro={pro} fat={fat} />
      <button className="btn" onClick={handleClick}>
        add to plate
      </button>
    </div>
  );
}

export default SearchItemForm;
