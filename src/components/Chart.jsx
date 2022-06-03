import React, { useState } from "react";
import Balance from "./Balance";
import ChartFooter from "./ChartFooter";
import Spending from "./Spending";
import Bar from "./Bar";

import Data from "../data.json";

const Chart = () => {
  const [data] = useState({
    amount: 227.94,
    difference: 0,
    sign: "-",
  });

  return (
    <>
      <Balance amount={data.amount} />
      <section className="chart">
        <Spending />
        <div className="chart__container">
          {Data.map((item, index) => (
            <Bar key={index} amount={item.amount} title={item.day} />
          ))}
        </div>
        <ChartFooter
          difference={data.difference}
          total={data.amount}
          sign={data.sign}
        />
      </section>
    </>
  );
};

export default Chart;
