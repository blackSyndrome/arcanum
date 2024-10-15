"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signout } from "@/lib/auth.actions";

export default function LogoutButton() {
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
}
