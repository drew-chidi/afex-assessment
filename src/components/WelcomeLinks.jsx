import React from "react";
import { NavLink } from "react-router-dom";

import Card from "./UI/Card";
import classes from "./WelcomeLinks.module.css";

const WelcomeLinks = (props) => {
  let route;
  let button;
  if (props.label === "Sign in") {
    button = classes.signinButton;
    route = "/signin";
  } else {
    button = classes.signupButton;
    route = "/signup";
  }

  return (
    <Card>
      <div className={classes.linkContainer}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button className={button}>
          <NavLink className={button} to={route}>
            {props.label}
          </NavLink>
        </button>
      </div>
    </Card>
  );
};

export default WelcomeLinks;
