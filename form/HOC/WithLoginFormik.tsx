import { withFormik } from "formik";
import * as Yup from "yup";
import TemplateLoginForm from "../components/TemplateLoginForm";

interface LoginFormValues {
   email: string;
   password: string;
}

interface LoginFormProps {
   //add props
}

const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
   mapPropsToValues: () => {
      return {
         email: "",
         password: "",
      };
   },
   validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
         .required("No password provided.")
         .min(8, "Password is too short - should be 8 chars minimum.")
         .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
   }),

   handleSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
   },
})(TemplateLoginForm);

export default LoginForm;
