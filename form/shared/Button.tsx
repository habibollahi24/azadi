import React from "react";

interface ButtonProps {
   children: string;
   type?: "button" | "reset" | "submit";
   disabled?: boolean;
   className: string;
}

const Button = ({ children, type, disabled, className }: ButtonProps) => {
   return (
      <button type={type ?? "button"} disabled={disabled} className={className}>
         {children}
      </button>
   );
};

export default Button;
