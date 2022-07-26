import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthInput from "./AuthInput";
import Card from "../UI/Card";
import AuthCheckbox from "./AuthCheckbox";

const SigninContent = () => {
  return (
    <Card>
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
            <div>
              <AuthCheckbox name='rememberMe'>Stay Signed in</AuthCheckbox>
              <NavLink to='/forgetPassword'>Forget Password?</NavLink>
            </div>
            <div>
              <button className='' type='submit'>
                <NavLink to='/dashboard'>Sign in</NavLink>
              </button>
              <button className='' type='submit'>
                <NavLink to='/'>Back</NavLink>
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Card>
  );
};

export default SigninContent;
