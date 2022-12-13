import React from "react";
import { Field } from "formik";
import { ErrorMessage } from "formik";

interface InputProps {
   label: string;
   type?: string;
   name: string;
}

const Input = ({ label, type, name }: InputProps) => {
   return (
      <>
         <label>{label}:</label>
         <Field type={type ?? "text"} name={name} />
         <ErrorMessage className="error-msg" name={name} component="div" />
      </>
   );
};

export default Input;
