import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import AuthHeader from "./AuthHeader";
import { AuthContext } from "../../store/auth-context";
import check from "../../assets/check.png";
import classes from "./RegistrationCompleteContent.module.css";
import ProgressStep from "../UI/ProgressStep";

const RegistrationCompleteContent = () => {
  const authCtx = useContext(AuthContext);
  const firstName = authCtx.details.firstName;
  console.log(authCtx.details.firstName);
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.imageContainer}>
          <img src={check} alt='well done'></img>
        </div>
        <AuthHeader
          title='Registration Complete'
          description={`Dear ${firstName}. Your registration is now complete. You may now proceed to your dashboard and start trading commodities.`}
        />
        <button className={classes.button}>
          <NavLink to='/dashboard'>GO TO DASHBOARD</NavLink>
        </button>
      </Card>
      <ProgressStep value='4' />
    </div>
  );
};

export default RegistrationCompleteContent;
