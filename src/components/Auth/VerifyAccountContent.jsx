import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Card from "../UI/Card";
import AuthHeader from "./AuthHeader";
import AuthInput from "./AuthInput";
import classes from "./VerifyAccountContent.module.css";
import { resendOtp, validateOtp } from "../util/auth-api";
import { AuthContext } from "../../store/auth-context";
import CompanyLogo from "../CompanyLogo";
import ProgressStep from "../UI/ProgressStep";

const VerifyAccountContent = () => {
  const navigate = useNavigate("/complete");
  const authCtx = useContext(AuthContext);
  const email = authCtx.details.email;
  const companyEmail = authCtx.details.companyEmail;
  const phone = authCtx.details.phone;
  const id = authCtx.details.id;
  console.log("phone", phone);
  console.log("email", email);
  console.log("id", id);

  const resendCodeHandler = async () => {
    await resendOtp({ email });
  };
  let labelInfo;
  if (!id) {
    labelInfo = `Enter the 4-digit code that was sent to ${phone} and ${email}`;
  } else {
    labelInfo = `Enter the 4-digit code that was sent to ${companyEmail}`;
  }
  return (
    <div className={classes.verifyContainer}>
      <CompanyLogo />
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
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values.code);
            let otp = values.code;
            try {
              await validateOtp({ otp });
            } catch (error) {
              setTimeout(() => {
                alert(error.message);
                setSubmitting(false);
              }, 400);
            }
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
              <button
                onClick={resendCodeHandler}
                className={classes.resendButton}
              >
                Resend code
              </button>
              <div className={classes.buttonGroup}>
                <button className={classes.backButton} type='submit'>
                  <NavLink to='/signup-details'>BACK</NavLink>
                </button>
                <button className={classes.finishButton} type='submit'>
                  FINISH
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </Card>
      <ProgressStep value='3' />
    </div>
  );
};

export default VerifyAccountContent;
