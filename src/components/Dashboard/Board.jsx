import React from "react";
import classes from "./Board.module.css";
const data = ["x-Traded", "OTC", "FI", "Derivatives"];

const Board = () => {
  return (
    <div className={classes.linkBox}>
      <h5>Board</h5>
      {data.map((item) => (
        <h5>
          <button>{item}</button>
        </h5>
      ))}
    </div>
  );
};

export default Board;
