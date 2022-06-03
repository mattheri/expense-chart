import React from "react";

const ChartFooter = ({ total, difference, sign = "-" }) => {
  return (
    <footer className="chart__footer">
      <div className="chart__footer-total__container">
        <small className="chart__footer-total__title">Total this month</small>
        <h2 className="chart__footer-total__amount">${total.toFixed(2)}</h2>
      </div>
      <div className="chart__footer-sign__container">
        <small className="chart__footer-sign__difference">
          {sign}
          {difference.toFixed(1)}%
        </small>
        <small className="chart__footer-sign__title">from last month</small>
      </div>
    </footer>
  );
};

export default ChartFooter;
