import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface MyFormValues {
   name: string;
   email: string;
   password: string;
}

interface Action {
   setSubmitting: (status: boolean) => void;
}

const initialValues: MyFormValues = { name: "", email: "", password: "" };

const validationSchema = Yup.object({
   name: Yup.string().min(2, "Must be 2 characters or less").required("Required"),
   email: Yup.string().email("Invalid email address").required("Required"),
   password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const onSubmit = (values: MyFormValues, actions: Action) => {
   console.log(values);
   actions.setSubmitting(false);
};

const Register = () => {
   return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
         {({ isSubmitting }) => (
            <Form className="shadow-md flex flex-col max-w-xs rounded-md p-10 mx-auto  justify-center  ">
               <label>Name:</label>
               <Field type="name" name="name" />
               <ErrorMessage className="error-msg" name="name" component="div" />

               <label>Email:</label>
               <Field type="email" name="email" />
               <ErrorMessage className="error-msg" name="email" component="div" />

               <label>Password:</label>
               <Field type="password" name="password" />
               <ErrorMessage className="error-msg" name="password" component="div" />

               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary !mt-3 disabled:opacity-50  disabled:cursor-not-allowed "
               >
                  Submit
               </button>
            </Form>
         )}
      </Formik>
   );
};

export default Register;
