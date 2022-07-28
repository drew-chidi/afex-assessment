import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Card from "../UI/Card";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import classes from "./SignupDetails.module.css";
import CompanyLogo from "../CompanyLogo";

const SignupDetailsContent = ({ id, onAuthenticate }) => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  // Validating Phone Number
  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className={classes.detailsContainer}>
      <CompanyLogo />
      <Card>
        <div>
          <AuthHeader
            title='Register new account'
            description='Sign up for an account and start trading today'
          />

          <Formik
            initialValues={{
              companyEmail: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              companyEmail: !id
                ? Yup.string()
                    .email("Invalid email address")
                    .required("This field is required")
                : Yup.string(),
              password: Yup.string()
                .min(4, "Must not be less than 4 characters")
                .required("This field is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Required"),
            })}
            onSubmit={(values) => {
              values.phone = value;
              onAuthenticate(values);
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                navigate("/verifyaccount");
              }, 400);
            }}
          >
            <Form>
              <div className={classes.individualGroup}>
                <div className={classes.nameGroup}>
                  {!id && (
                    <AuthInput
                      label='Company Email'
                      name='companyEmail'
                      type='email'
                      placeholder='Enter email'
                    />
                  )}
                  <AuthInput
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                  />
                  <AuthInput
                    label='Confirm Password'
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                  />
                  {id && (
                    <div className={classes.phoneGroup}>
                      <label>Phone Number</label>
                      <PhoneInput
                        name='phone'
                        type='text'
                        placeholder='Enter phone number'
                        value={value}
                        onChange={setValue}
                        className={classes.phoneInput}
                      />
                    </div>
                  )}
                </div>
                <button className={classes.formButton} type='submit'>
                  VERIFY ACCOUNT
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Card>
    </div>
  );
};

export default SignupDetailsContent;
