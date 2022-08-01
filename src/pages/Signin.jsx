import React, { useContext, useState } from "react";
import SigninContent from "../components/Auth/SigninContent";
import Loader from "../components/UI/Loader";
import { signinUser } from "../components/util/auth-api";
// import Manager from "../lib/encryption.js";
import { AuthContext } from "../store/auth-context";

// const manager = new Manager({
//   key: process.env.KEY,
//   vector: process.env.VECTOR,
// });

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const signinHandler = async ({ data }) => {
    setIsLoading(true);

    // Update the context store with all the entered info
    authCtx.updateDetails(data);
    // data = { data };
    // manager.encrypt(data);

    console.log("signinHandler", data);
    try {
      const response = await signinUser({ data });
      console.log(response);
      // manager.decrypt(response); // impure decryption
      // console.log("decrypted", response);
    } catch (error) {
      alert(error.message);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div styles={{ width: "100%", height: "300px" }}>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <SigninContent onAuthenticate={signinHandler} />
    </div>
  );
};

export default Signin;
