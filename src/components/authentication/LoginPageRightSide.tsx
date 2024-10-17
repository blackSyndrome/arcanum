"use client";

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GoogleSigninButton from "@/components/authentication/GoogleSigninButton";
import { signInWithGoogle } from "@/lib/signInWithGoogle";

const LoginPageRightSide = () => {
   return (
      <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center p-4 md:p-8">
         <h1 className="text-3xl md:text-4xl font-semibold">arcanum</h1>
         <p className="text-sm md:text-base text-muted-foreground mb-4">
            Powered by New Era Main Library
         </p>
         <Card className="w-full max-w-sm md:max-w-md px-2 shadow-md rounded-lg">
            <CardHeader>
               <CardTitle className="text-lg md:text-xl">Welcome!</CardTitle>
               <CardDescription className="text-sm md:text-base">
                  Are you from within New Era University?
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <GoogleSigninButton
                  label="Sign in with my institutional email"
                  onClick={() => {
                     signInWithGoogle();
                  }}
               />
               <Button variant="outline" className="w-full">
                  Continue as guest
               </Button>
            </CardContent>
         </Card>
      </div>
   );
};

export default LoginPageRightSide;
