import React from "react";
import logo from "../assets/Rectangle.png";
import classes from "./CompanyLogo.module.css";

const CompanyLogo = () => {
  return (
    <div className={classes.logoContainer}>
      <img src={logo} alt='Brand Logo' />
    </div>
  );
};

export default CompanyLogo;
