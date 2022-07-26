import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import SignupDetailsContent from "../components/Auth/SignupDetailsContent";
import { AuthContext } from "../store/auth-context";

const SignupDetails = () => {
  const authCtx = useContext(AuthContext);
  const location = useLocation();
  const data = location.state.data;
  const id = location.state.id;
  authCtx.updateDetails(data);

  console.log(data);
  return (
    <div>
      <SignupDetailsContent id={id} data={data} />
    </div>
  );
};

export default SignupDetails;
