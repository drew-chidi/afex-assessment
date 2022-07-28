import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthInput from "./AuthInput";
import Card from "../UI/Card";
import AuthCheckbox from "./AuthCheckbox";
import classes from "./SigninContent.module.css";
import AuthHeader from "./AuthHeader";
import CompanyLogo from "../CompanyLogo";

const SigninContent = () => {
  return (
    <div className={classes.container}>
      <CompanyLogo />
      <Card>
        <AuthHeader
          title='Sign in to ComX'
          description='Enter you login credentials'
        />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            rememberMe: false, // added for our checkbox
            jobType: "", // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            acceptedTerms: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
            jobType: Yup.string()
              .oneOf(
                ["designer", "development", "product", "other"],
                "Invalid Job Type"
              )
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
            <div>
              <AuthInput
                label='Your Email'
                name='email'
                type='email'
                placeholder='Enter your Email'
              />
              <AuthInput
                label='Your Password'
                name='password'
                type='password'
                placeholder='Enter your password'
              />
              <div className={classes.rememberMe}>
                <AuthCheckbox
                  name='rememberMe'
                  label='Stay Signed in'
                  className={classes.check}
                >
                  Stay Signed in
                </AuthCheckbox>
                <NavLink to='/forgetPassword'>Forget Password?</NavLink>
              </div>
              <div className={classes.buttonGroup}>
                <button className={classes.signin} type='submit'>
                  <NavLink to='/dashboard'>Sign in</NavLink>
                </button>
                <button className={classes.goBack}>
                  <NavLink to='/'>Back</NavLink>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};

export default SigninContent;
