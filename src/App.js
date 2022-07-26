import React from "react";
import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";
import SignupDetails from "./pages/SignupDetails";
import VerifyAccount from "./pages/VerifyAccount";
import RegistrationComplete from "./pages/RegistrationComplete";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='signup-details' element={<SignupDetails />} />
        <Route path='verifyaccount' element={<VerifyAccount />} />
        <Route path='complete' element={<RegistrationComplete />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='forgetPassword' element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
