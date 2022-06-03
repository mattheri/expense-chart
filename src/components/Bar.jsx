import React from "react";
import { useState } from "react";

const Bar = ({ amount, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const showBarAmount = () => {
    setIsHovered(true);
  };

  const hideBarAmount = () => {
    setIsHovered(false);
  };

  const className = isHovered ? "bar__amount show" : "bar__amount";

  return (
    <div className="bar__container">
      <div className={className}>${amount.toFixed(2)}</div>
      <div
        onMouseEnter={showBarAmount}
        onMouseLeave={hideBarAmount}
        style={{ height: `${amount}px` }}
        className="bar__line"
      ></div>
      <small className="bar__title">{title}</small>
    </div>
  );
};

export default Bar;
