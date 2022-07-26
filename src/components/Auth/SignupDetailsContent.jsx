import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Card from "../UI/Card";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import classes from "./SignupDetails.module.css";

const SignupDetailsContent = ({ id, data }) => {
  const [value, setValue] = useState();

  const navigate = useNavigate();
  const ref = useRef();

  // Validating Form Values

  const handleChange = () => {
    ref.current.setFieldValue("phone");
  };

  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className={classes.detailsContainer}>
      <Card>
        <div>
          <AuthHeader
            title='Register new account'
            description='Sign up for an account and start trading today'
          />

          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            innerRef={ref}
            validationSchema={Yup.object({
              email: !id
                ? Yup.string()
                    .email("Invalid email address")
                    .required("This field is required")
                : Yup.string(),
              // email: Yup.string().when(id, {
              //   is: (id) => id === false,
              //   then: Yup.string().required(
              //     "I am required now the checkbox is checked"
              //   ),
              // }),
              password: Yup.string()
                .min(4, "Must not be less than 4 characters")
                .required("This field is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Required"),
              // phone: Yup.string().required("Required"),
              // .matches(phoneRegExp, "Phone number is not valid"),
            })}
            onSubmit={(values) => {
              values.phone = value;
              console.log("phone", typeof value);
              console.log("omo", values);
              setTimeout(() => {
                console.log("omo", values);
                alert(JSON.stringify(values, null, 2));
                navigate("/verifyaccount");
              }, 400);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className={classes.individualGroup}>
                  <div className={classes.nameGroup}>
                    {!id && (
                      <AuthInput
                        label='Company Email'
                        name='email'
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
            )}
          </Formik>
        </div>
      </Card>
    </div>
  );
};

export default SignupDetailsContent;
