"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Role: React.FC = () => {
   const [selectedRole, setSelectedRole] = useState<
      "student" | "librarian" | null
   >(null);
   const [showFileInput, setShowFileInput] = useState(false);

   const handleClick = (role: "student" | "librarian") => {
      setSelectedRole(role);
      console.log(role);
      setTimeout(() => {
         setShowFileInput(true);
      }, 300);
   };

   return (
      <div className="flex items-center justify-center h-screen">
         <Card
            className={`w-[600px] ${
               selectedRole ? "animate-expand" : "h-[200px]"
            }`}
         >
            <CardHeader>
               <CardTitle>What's your role within the university?</CardTitle>
               <CardDescription>Choose between the options.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
               <div className="flex justify-center gap-20">
                  <Button
                     className="w-[120px]"
                     variant={
                        selectedRole === "student" ? undefined : "outline"
                     }
                     onClick={() => handleClick("student")}
                  >
                     Student
                  </Button>
                  <Button
                     className="w-[120px]"
                     variant={
                        selectedRole === "librarian" ? undefined : "outline"
                     }
                     onClick={() => handleClick("librarian")}
                  >
                     Librarian
                  </Button>
               </div>
               <div
                  className={`mt-12 grid w-full max-w-sm items-center gap-1.5 transition-opacity duration-300 ${
                     showFileInput ? "opacity-100" : "opacity-0"
                  }`}
               >
                  <Label htmlFor="picture" className="text-center mb-2">
                     Please upload your current academic year's Cirtificate Of
                     Matriculation.
                  </Label>
                  <Input id="picture" type="file" className="mx-auto" />
               </div>
            </CardContent>
         </Card>
      </div>
   );
};

export default Role;
