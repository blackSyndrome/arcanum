"use client";

import { signInWithGoogle } from "@/lib/auth.actions";
import { Button } from "../ui/button";

export default function GoogleSinginButton() {
   return (
      <div>
         <Button
            variant="default"
            className="w-full"
            onClick={() => {
               signInWithGoogle(`${window.location.origin}/dashboard`);
            }}
         >
            Sign in with my institutional email
         </Button>
      </div>
   );
}
