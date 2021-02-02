import React from "react";
import { Icon } from "@iconify/react";
import outlineDeleteForever from "@iconify-icons/ic/outline-delete-forever";

function PlateItem({ item, amount, pro, cal, fat, id, handleClick }) {
  return (
    <tr style={{ textAlign: "center" }}>
      <td style={{ border: "1px solid black" }}>{item}</td>
      <td style={{ border: "1px solid black" }}>{amount}</td>
      <td style={{ border: "1px solid black" }} className="pro1">
        {pro}
      </td>
      <td style={{ border: "1px solid black" }} className="cal1">
        {cal}
      </td>
      <td style={{ border: "1px solid black" }} className="fat1">
        {fat}
      </td>
      <td style={{ border: "1px solid black" }}>
        <Icon
          style={{ cursor: "pointer" }}
          className="btn-1"
          icon={outlineDeleteForever}
          onClick={() => handleClick(id)}
        />
      </td>
    </tr>
  );
}

export default PlateItem;
