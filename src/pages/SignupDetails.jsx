import React, { useContext, useState } from "react";
import Manager from "../lib/encryption.js";
import SignupDetailsContent from "../components/Auth/SignupDetailsContent";
import { signupCorporate, signupIndividual } from "../components/util/auth-api";
import { AuthContext } from "../store/auth-context";
import Loader from "../components/UI/Loader.jsx";

const manager = new Manager({
  key: process.env.KEY,
  vector: process.env.VECTOR,
});

const SignupDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const initialData = authCtx.details;
  const id = initialData.id;
  console.log("initialdata", initialData);

  const registerHandler = async ({ values }) => {
    setIsLoading(true);
    let data = {
      ...initialData,
      ...values,
    };

    // Update the context store with all the entered info
    authCtx.updateDetails(data);

    data = { data };
    manager.encrypt(data);

    console.log("details", typeof data);
    if (id) {
      try {
        const response = await signupIndividual({ data });
        manager.decrypt(response); // impure decryption
      } catch (error) {
        alert(error.message);
      }
      setIsLoading(false);
    }
    if (!id) {
      try {
        const response = await signupCorporate({ data });
        manager.decrypt(response); // impure decryption
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
