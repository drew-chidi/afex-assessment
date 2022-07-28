import React from "react";
import classes from "./Board.module.css";

const data = ["All", "SMAZ", "SBBS", "SPRL", "SGNG", "SSGM", "FETC", "SCOC"];
const Product = () => {
  return (
    <div className={classes.linkBox}>
      <h5>Product</h5>
      {data.map((item) => (
        <h5>
          <button>{item}</button>
        </h5>
      ))}
    </div>
  );
};

export default Product;
