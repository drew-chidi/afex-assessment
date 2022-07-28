import React from "react";
import ProductTable from "./ProductTable";
import TradeLog from "./TradeLog";
import classes from "./Market.module.css";

const Market = () => {
  return (
    <div className={classes.container}>
      <section className={classes.productSection}>
        <div>
          <ProductTable />
        </div>
        <div>
          <ProductTable />
        </div>
      </section>
      <div className={classes.tradelogSection}>
        <TradeLog />
      </div>
    </div>
  );
};

export default Market;
