import React from "react";
import { useField } from "formik";

import classes from "./AuthSelect.module.css";

const AuthSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes.authselectContainer}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} className={classes.textInput} />
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};
export default AuthSelect;
