import { withFormik } from "formik";
import * as Yup from "yup";
import TemplateLoginForm from "../components/TemplateLoginForm";
import callApi from "./../../api/callApi";
import { ValidationsErrorFields } from "./../../utils/validationErrors";

interface LoginFormValues {
   email: string;
   password: string;
}

interface LoginFormProps {
   //add props
   setCookie: any;
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
         .min(8, "Password is too short - should be 8 chars minimum."),
      // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
   }),

   handleSubmit: async (values, { props, setFieldError }) => {
      try {
         const response = await callApi().post("/auth/login", values);

         if (response.status === 200) {
            const token = response.data.token;
            props.setCookie("user-token", token, {
               maxAge: 30 * 24 * 60 * 60,
               domain: "localhost",
               path: "/",
               sameSite: "lax",
            });
         }
      } catch (error) {
         if (error instanceof ValidationsErrorFields) {
            Object.entries(error.messages).forEach((key) =>
               setFieldError(key[0], key[1] as string)
            );
         }
      }
   },
})(TemplateLoginForm);

export default LoginForm;
