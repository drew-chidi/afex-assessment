import React from "react";
import WelcomeLinks from "./WelcomeLinks";
import classes from "./WelcomeContent.module.css";
import Card from "./UI/Card";
import CompanyLogo from "./CompanyLogo";

const WelcomeContent = () => {
  return (
    <div className={classes.container}>
      <CompanyLogo />
      <progress-steps id='my-steps'></progress-steps>
      <WelcomeLinks
        title='Sign in to ComX'
        description='Welcome to ComX'
        label='Sign in'
      />

      <WelcomeLinks
        title='Create an Account'
        description='Join the Family'
        label='Sign up'
      />
    </div>
  );
};

export default WelcomeContent;
