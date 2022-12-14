import React from "react";
import { Form, FormikProps } from "formik";
import LogoForm from "../shared/LogoForm";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { HiOutlineUserCircle } from "react-icons/hi";

interface RegisterFormValues {
   name: string;
   email: string;
   password: string;
}

const TemplateRegisterForm = (props: FormikProps<RegisterFormValues>) => {
   return (
      <Form className=" shadow-md flex flex-col max-w-xs rounded-md p-8 mx-auto mt-12 justify-center  ">
         <LogoForm Icon={HiOutlineUserCircle}>Register</LogoForm>

         <Input label="Name" name="name" />
         <Input label="Email" name="email" type="email" />
         <Input label="password" name="password" type="password" />

         <Button
            type="submit"
            // disabled={!(props.isValid && props.dirty)}
            className="btn-primary !mt-5"
         >
            Register
         </Button>
      </Form>
   );
};

export default TemplateRegisterForm;
