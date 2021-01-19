import React from "react";
import { Icon } from "@iconify/react";
import outlineDeleteForever from "@iconify-icons/ic/outline-delete-forever";

function PlateItem({ item, amount, pro, cal, fat, id, handleClick }) {
  return (
    <div className="content">
      <p>{item},</p>
      <p>{amount},</p>
      <p className="pro1">{pro},</p>
      <p className="cal1">{cal},</p>
      <p className="fat1">{fat}</p>
      <Icon
        style={{ cursor: "pointer" }}
        className="btn-1"
        icon={outlineDeleteForever}
        onClick={() => handleClick(id)}
      />
    </div>
  );
}

export default PlateItem;
