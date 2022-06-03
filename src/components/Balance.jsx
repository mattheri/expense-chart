import React from "react";
import Image from "./Image";
import Logo from "../images/logo.svg";

const Balance = ({ amount = 0 }) => {
  return (
    <div className="balance">
      <div className="balance__wrapper">
        <small className="balance__title">My Balance</small>
        <div className="balance__amount">${amount.toFixed(2)}</div>
      </div>
      <div className="balance__icon">
        <Image src={Logo} alt="Expense Charts" />
      </div>
    </div>
  );
};

export default Balance;
