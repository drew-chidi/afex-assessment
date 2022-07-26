import React from "react";
import { NavLink } from "react-router-dom";
import AuthInput from "./AuthInput";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthHeader from "./AuthHeader";
import Card from "../UI/Card";

const ForgetPasswordContent = () => {
  return (
    <div>
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
            <div>
              <div>
                <AuthInput
                  label='Enter the Email Address you registered with'
                  name='email'
                  type='text'
                  placeholder='Enter your email'
                />
                <p>
                  Note that you'll be sent an OTP to the email address provided
                </p>
                <p>Resend Code</p>
                <div>
                  <p>OTP code is invalid</p>
                  <p>X</p>
                </div>
              </div>
              <div className=''>
                <button className=''>
                  <NavLink to='/signup-details'>BACK</NavLink>
                </button>
                <button className='' type='submit'>
                  <NavLink to='/complete'>PROCEED</NavLink>
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
