import React from "react";

const Spending = ({ timespan = "Last 7 days" }) => {
  return (
    <div className="spending">
      <h3 className="spending__title">Spending - {timespan}</h3>
    </div>
  );
};

export default Spending;
