import React, { useState } from "react";
import Card from "../UI/Card";
import AuthHeader from "./AuthHeader";
import SignupForm from "./SignupForm";
import classes from "./SignupContent.module.css";

const SignupContent = () => {
  const [selectForm, setSelectForm] = useState(true);

  // Button Styles
  let individualButton;
  let corporateButton;
  if (!selectForm) {
    console.log(selectForm);
    corporateButton = `${classes.button} ${classes.active}`;
  } else {
    corporateButton = `${classes.button}`;
  }
  if (selectForm) {
    individualButton = `${classes.button} ${classes.active}`;
  } else {
    individualButton = `${classes.button}`;
  }
  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default SignupContent;
