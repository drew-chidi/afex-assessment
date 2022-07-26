import React from "react";
import { useField } from "formik";

import classes from "./AuthInput.module.css";

const AuthInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(field);
  // console.log(meta);

  return (
    <div className={classes.authInputContainer}>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input className={classes.textInput} {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default AuthInput;
