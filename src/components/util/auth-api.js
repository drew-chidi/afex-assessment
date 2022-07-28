import axios from "axios";
import { url } from "./url";
import Manager from "../../lib/encryption";

const manager = new Manager({
  key: process.env.KEY,
  vector: process.env.VECTOR,
});

// Register
export async function signupIndividual({ data }) {
  manager.encrypt(data);
  const response = await axios.post(`${url}register`, {
    email: data.email,
    password: data.password,
    first_name: data.firstName,
    last_name: data.lastName,
    auth_type: "password",
    referral_code: "",
    phone: data.phone,
    occupation: "Farmer",
  });
  console.log("response");
  manager.decrypt(response); // impure decryption

  return response;
}

export async function signupCorporate({ data }) {
  console.log("api", data);
  const response = await axios.post(`${url}`, {
    email: data.compantEmail,
    password: data.password,
    date_of_incorporation: data.date_of_incorporation,
    company_name: data.company_name,
    company_website: data.company_website,
    nature_of_business: data.type_of_business,
    auth_type: "password",
    rc_number: "3245463454",
    referral_code: "",
    company_phone: "+234905654999",
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

//  Resend OTP
export async function resendOtp({ email }) {
  const response = await axios.post(`${url}otp/resend`, {
    email,
  });
  return response;
}

//  Validate OTP
export async function validateOtp({ otp }) {
  const response = await axios.post(`${url}otp/validate`, {
    otp: otp,
  });
  console.log("otp", response);
  return response;
}
