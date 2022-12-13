import React from "react";
import { IconType } from "react-icons/lib";

interface LogoFormProps {
   children: string;
   Icon: IconType;
}

const LogoForm = ({ children, Icon }: LogoFormProps) => {
   return (
      <div className="flex justify-center flex-col items-center ">
         <Icon className="text-5xl text-orange-300" />
         <p className="font-semibold text-gray-700 text-sm">{children}</p>
      </div>
   );
};

export default LogoForm;
