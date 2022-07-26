import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardBox}>{props.children}</div>;
    </div>
  );
};

export default Card;
