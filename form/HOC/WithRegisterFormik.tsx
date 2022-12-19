import { withFormik } from "formik";
import TemplateRegisterForm from "../../form/components/TemplateRegisterForm";
import * as Yup from "yup";
import callApi from "./../../api/callApi";
import Router from "next/router";
import { ValidationsErrorFields } from "./../../utils/validationErrors";

interface RegisterFormValues {
   name: string;
   email: string;
   password: string;
}

interface RegisterFormProps {
   //add props
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
   mapPropsToValues: () => {
      return {
         name: "",
         email: "",
         password: "",
      };
   },
   validationSchema: Yup.object({
      name: Yup.string()
         .min(2, "Must be 2 characters or less")
         .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
         .required("No password provided.")
         .min(8, "Password is too short - should be 8 chars minimum."),
      // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
   }),

   handleSubmit: async (values, { setFieldError }) => {
      try {
         const response = await callApi().post("/auth/register", values);

         if (response.status === 201) Router.push("/auth/login");
      } catch (error) {
         if (error instanceof ValidationsErrorFields) {
            Object.entries(error.messages).forEach((key) =>
               setFieldError(key[0], key[1] as string)
            );
         }
      }
   },
})(TemplateRegisterForm);

export default RegisterForm;
