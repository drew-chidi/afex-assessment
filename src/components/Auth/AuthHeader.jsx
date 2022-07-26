import React from "react";
import classes from "./AuthHeader.module.css";

const AuthHeader = ({ title, description }) => {
  return (
    <div className={classes.headerContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default AuthHeader;
