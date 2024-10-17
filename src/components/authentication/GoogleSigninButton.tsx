"use client";

import { Button, ButtonProps } from "../ui/button";
import React from "react";

type GoogleSigninButtonProp = ButtonProps & {
   label: string; 
};

const GoogleSigninButton: React.FC<GoogleSigninButtonProp> = (props) => {
   const { label, ...buttonProps } = props;

   return (
      <div>
         <Button {...buttonProps} variant="default" className="w-full">
            {label}
         </Button>
      </div>
   );
};

export default GoogleSigninButton;
