import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Manager from "../lib/encryption.js";

import SignupDetailsContent from "../components/Auth/SignupDetailsContent";
import { signupIndividual } from "../components/util/auth-api";
import { AuthContext } from "../store/auth-context";
import Loader from "../components/UI/Loader.jsx";

// Register Users
const SignupDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const authCtx = useContext(AuthContext);

  const manager = new Manager({
    key: process.env.KEY,
    vector: process.env.VECTOR,
  });

  const initialData = location.state.data;
  const id = location.state.id;
  authCtx.updateDetails(initialData);

  const registerHandler = async (item, params) => {
    setIsLoading(true);
    let data = {
      ...initialData,
      ...item,
    };
    // Update the context store with all the entered info
    authCtx.updateDetails(data);
    data = { otp: params.otp };
    manager.encrypt(data);

    console.log("registerHandler", data);
    if (id) {
      try {
        const response = await signupIndividual({ data });
        console.log(response);
        manager.decrypt(response); // impure decryption
        console.log("decrypted", response);
      } catch (error) {
        alert(error.message);
      }
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <SignupDetailsContent id={id} onAuthenticate={registerHandler} />
    </div>
  );
};

export default SignupDetails;
