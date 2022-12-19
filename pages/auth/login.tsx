import { useCookies } from "react-cookie";
import LoginForm from "../../form/HOC/WithLoginFormik";

const LoginPage = () => {
   const [cookies, setCookie] = useCookies(["user-token"]);
   return (
      <>
         <LoginForm setCookie={setCookie} />
      </>
   );
};

export default LoginPage;
