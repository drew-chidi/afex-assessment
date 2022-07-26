import axios from "axios";
import { url } from "./url";

// Register
export async function signupIndividual({}) {
  const response = await axios.post(`${url}register`, {
    email,
    password,
    first_name,
    last_name: "test",
    auth_type: "password",
    password,
    referral_code,
    phone,
    occupation,
    Farmer,
  });
  return response;
}

export async function signupCorporate({}) {
  const response = await axios.post(`${url}`, {
    email,
    password,
    date_of_incorporation,
    company_name,
    company_website,
    nature_of_business,
    auth_type,
    rc_number,
    referral_code,
    company_phone,
  });
  return response;
}

//  Login Endpoint
export async function signinUser({ email, password }) {
  const response = await axios.post(`${url}login`, {
    email: email,
    password: password,
    auth_type: "password",
  });
  return response;
}

//  Password Reset Request
export async function forgetPassword({ email }) {
  const response = await axios.post(`${url}password-reset-request`, {
    email: email,
  });
  return response;
}

//  Password Reset OTP Validation
export async function otpValidation({ otp, email }) {
  const response = await axios.post(`${url}password-reset-otp-validation`, {
    otp,
    email,
  });
  return response;
}

//  Password Change
export async function passwordChange({ email, new_password }) {
  const response = await axios.post(`${url}password-change`, {
    email,
    new_password,
  });
  return response;
}

//  Validate OTP
export async function validateOtp({ email }) {
  const response = await axios.post(`${url}otp/resend`, {
    email,
  });
  return response;
}

//  OTP Resend
export async function validateOtp({ token, otp }) {
  const response = await axios.post(`${url}password-change`, {
    otp,
  });
  return response;
}
