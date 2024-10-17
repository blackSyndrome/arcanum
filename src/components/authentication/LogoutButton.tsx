"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signout } from "@/lib/auth.actions";

const LogoutButton = () => {
   const router = useRouter();
   return (
      <div>
         <Button
            variant="default"
            className="w-full"
            onClick={() => {
               signout();
            }}
         >
            Logout
         </Button>
      </div>
   );
};

export default LogoutButton;