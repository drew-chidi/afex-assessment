import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthInput from "./AuthInput";
import classes from "./SignupForm.module.css";
import AuthSelect from "./AuthSelect";
import { AuthContext } from "../../store/auth-context";

const SignupForm = ({ id }) => {
  const [data, setData] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const authCtx = useContext(AuthContext);

  console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .matches("[^0-9]", "First Name cannot start with a number")
            .required("This field is required"),
          lastName: Yup.string()
            .matches(/[^0-9]+$/, "Last Name cannot start with a number")
            .max(20, "Must be 20 characters or less")
            .required("This field is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("This field is required"),
          acceptedTerms: Yup.boolean()
            .required("This field is required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("This field is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // setData(values);
          // console.log(data);
          authCtx.updateDetails(values);

          // navigate("/signup-details", {
          //   state: {
          //     id: id,
          //     data: values,
          //   },
          // });
          setTimeout(() => {
            setData(values);

            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values }) => (
          <Form>
            {id && (
              <div className={classes.individualGroup}>
                <div className={classes.nameGroup}>
                  <AuthInput
                    label='Your First Name'
                    name='firstName'
                    type='text'
                    placeholder='Enter your First Name'
                  />

                  <AuthInput
                    label='Your Last Name'
                    name='lastName'
                    type='text'
                    placeholder='Enter your Last Name'
                  />
                </div>

                <AuthInput
                  label='Your Email'
                  name='email'
                  type='email'
                  placeholder='Enter your Email'
                />
                <button className={classes.formButton} type='submit'>
                  <NavLink
                    to='/signup-details'
                    state={{
                      id: id,
                      data: values,
                    }}
                  >
                    NEXT STEP
                  </NavLink>
                </button>
              </div>
            )}

            {!id && (
              <div className={classes.corporateGroup}>
                <AuthInput
                  label='Company Name'
                  name='companyName'
                  type='text'
                  placeholder='Enter your Company Name'
                />
                <div className={classes.nameGroup}>
                  <AuthSelect label='Type of Business' name='jobType'>
                    <option value=''>Select Type of Business</option>
                    <option value='designer'>Designer</option>
                    <option value='development'>Developer</option>
                    <option value='product'>Product Manager</option>
                    <option value='other'>Other</option>
                  </AuthSelect>
                  {/* 
                  <AuthInput
                    label='Date of Incorporation'
                    name='email'
                    type='email'
                    placeholder='Enter your Email'
                  /> */}
                  <div className={classes.dateBox}>
                    <label>Date of Incorporation</label>
                    <DatePicker
                      dateFormat='yyyy-MM-dd'
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <button
                  className={classes.formButton}
                  type='submit'
                  onClick={() =>
                    navigate("/signup-details", {
                      state: {
                        id: id,
                        data: values,
                      },
                    })
                  }
                >
                  <NavLink
                    to='/signup-details'
                    state={{
                      id: id,
                      data: data,
                    }}
                  >
                    NEXT STEP
                  </NavLink>
                </button>
              </div>
            )}

            {/* <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
           </MyCheckbox>  */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
