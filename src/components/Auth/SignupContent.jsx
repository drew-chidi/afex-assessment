import React, { useState } from "react";
import Card from "../UI/Card";
import AuthHeader from "./AuthHeader";
import SignupForm from "./SignupForm";
import classes from "./SignupContent.module.css";
import CompanyLogo from "../CompanyLogo";
import ProgressStep from "../UI/ProgressStep";

const SignupContent = () => {
  const [selectForm, setSelectForm] = useState(true);

  // Button Styles for Corporate and Individual Accounts Registration
  let individualButton;
  let corporateButton;
  if (!selectForm) {
    console.log(selectForm);
    corporateButton = `${classes.button} ${classes.active}`;
  } else {
    corporateButton = `${classes.button}`;
  }
  if (selectForm) {
    console.log(selectForm);

    individualButton = `${classes.button} ${classes.active}`;
  } else {
    individualButton = `${classes.button}`;
  }
  return (
    <div className={classes.container}>
      <CompanyLogo />
      <Card>
        <AuthHeader
          title='Register new account'
          description='Sign up for an account and start trading today'
        />
        <div>
          <p className={classes.selectCategory}>
            Select the category that best describes you
          </p>
          <div className={classes.buttonGroup}>
            <button
              onClick={() => setSelectForm(true)}
              className={individualButton}
            >
              Individual
            </button>
            <button
              onClick={() => setSelectForm(false)}
              className={corporateButton}
            >
              Corporate
            </button>
          </div>
          <div>
            {selectForm && <SignupForm id={selectForm} />}
            {!selectForm && <SignupForm id={selectForm} />}
          </div>
        </div>
      </Card>
      <ProgressStep value='1' />
    </div>
  );
};

export default SignupContent;
