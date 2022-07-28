import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthInput from "./AuthInput";
import classes from "./SignupForm.module.css";
import AuthSelect from "./AuthSelect";
import { AuthContext } from "../../store/auth-context";
import "./Datepicker.css";

const SignupForm = ({ id }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [fDate, setfDate] = useState("");

  const authCtx = useContext(AuthContext);
  function formatDate(date) {
    setStartDate(date);
    let month = startDate.getMonth() + 1;
    let day = startDate.getDate();
    let year = startDate.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    setfDate([year, month, day].join("-"));
  }
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          typeOfBusiness: "",
          companyName: "",
        }}
        validationSchema={Yup.object({
          firstName:
            id &&
            Yup.string()
              .matches("[^0-9]", "First Name cannot start with a number")
              .required("This field is required"),
          lastName:
            id &&
            Yup.string()
              .matches(/[^0-9]+$/, "Last Name cannot start with a number")
              .max(20, "Must be 20 characters or less")
              .required("This field is required"),
          email:
            id &&
            Yup.string()
              .email("Invalid email address")
              .required("This field is required"),

          typeOfBusiness: !id
            ? Yup.string()
                .oneOf(
                  ["designer", "development", "product", "other"],
                  "Invalid Job Type"
                )
                .required("This field is required")
            : Yup.string(),
          companyName: !id
            ? Yup.string().required("This field is required")
            : Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Add the id props to the store to differentiate between individual and corporate accounts registration
          values["id"] = id;

          values["date_of_incorporation"] = fDate;
          authCtx.updateDetails(values);
          console.log({ ...values });

          navigate("/signup-details");
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
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
                  NEXT STEP
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
                  <AuthSelect label='Type of Business' name='typeOfBusiness'>
                    <option value=''>Select Type of Business</option>
                    <option value='designer'>Designer</option>
                    <option value='development'>Developer</option>
                    <option value='product'>Product Manager</option>
                    <option value='other'>Other</option>
                  </AuthSelect>
                  <div className={classes.dateBox}>
                    <label>Date of Incorporation</label>
                    <DatePicker
                      dateFormat='yyyy-MM-dd'
                      selected={startDate}
                      onChange={formatDate}
                    />
                  </div>
                </div>
                <button className={classes.formButton} type='submit'>
                  NEXT STEP
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
