import React from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "./AuthInput";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthHeader from "./AuthHeader";
import Card from "../UI/Card";
import classes from "./ForgetPassword.module.css";
import CompanyLogo from "../CompanyLogo";

const ForgetPasswordContent = () => {
  return (
    <div>
      <CompanyLogo />

      <Card>
        <AuthHeader
          title='Password Reset'
          description='Reset your password to continue trading on ComX'
        />
        <Formik
          initialValues={{
            code: "",
          }}
          validationSchema={Yup.object({
            code: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className={classes.formContainer}>
              <div>
                <AuthInput
                  label='Enter the 4-digit code that was sent to my@email.com'
                  name='email'
                  type='text'
                  placeholder='Enter code'
                />
                <div className={classes.note}>
                  <p>
                    Note that you'll be sent an OTP to the email address
                    provided
                  </p>
                  <p>Resend Code</p>
                </div>
                <div className={classes.errorBox}>
                  <div className={classes.otpError}>
                    <p>OTP code is invalid</p>
                    <button>X</button>
                  </div>
                </div>
              </div>
              <div className={classes.buttonGroup}>
                <button className={classes.goBack}>
                  <NavLink to='/signin'>BACK</NavLink>
                </button>
                <button className={classes.proceed} type='submit'>
                  <NavLink to='/complete'>FINISH</NavLink>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};

export default ForgetPasswordContent;
