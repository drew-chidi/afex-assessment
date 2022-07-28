import { useField } from "formik";
import classes from "./AuthCheckbox.module.css";

const AuthCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className='checkbox-input'>
        <input
          type='checkbox'
          {...field}
          {...props}
          className={classes.input}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default AuthCheckbox;
