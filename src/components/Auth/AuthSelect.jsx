import React from "react";
import { useField } from "formik";

import classes from "./AuthInput.module.css";

const AuthSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes.authInputContainer}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} className={classes.textInput} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
export default AuthSelect;
