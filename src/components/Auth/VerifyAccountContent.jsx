import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Card from "../UI/Card";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import classes from "./VerifyAccountContent.module.css";

const VerifyAccountContent = ({ id }) => {
  let labelInfo;
  if (id) {
    labelInfo = `Enter the 4-digit code that was sent to +2348063120245 and name@mymail.com`;
  } else {
    labelInfo = "Enter the 4-digit code that was sent to name@mymail.com";
  }
  return (
    <div className={classes.verifyContainer}>
      <Card>
        <AuthHeader
          title='Account details'
          description='Sign up for an account and start trading today'
        />
        <Formik
          initialValues={{
            code: "",
          }}
          validationSchema={Yup.object({
            code: Yup.string()
              .max(4, "Must be exactly 4 characters")
              .min(4, "Must be exactly 4 characters")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
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
                  label={labelInfo}
                  name='code'
                  type='text'
                  placeholder='Enter Code'
                />
              </div>
              <div className={classes.buttonGroup}>
                <button className={classes.backButton}>
                  <NavLink to='/signup-details'>BACK</NavLink>
                </button>
                <button className={classes.finishButton} type='submit'>
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

export default VerifyAccountContent;
