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

const SigninContent = ({ onAuthenticate }) => {
  const navigate = useNavigate();
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
            email: "",
            password: "",
            rememberMe: false, // added for our checkbox
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(4, "Password should be at least 4 characters")
              .required("Required"),
            rememberMe: Yup.boolean(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            onAuthenticate({ values });
            navigate("/dashboard");
            setSubmitting(false);
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
                  Sign in
                </button>
                <button className={classes.goBack} type='button'>
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
