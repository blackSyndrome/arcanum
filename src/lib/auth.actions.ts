"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";

const supabase = createClient();

// Post Auth (if successful), this will run
export async function handleOAuthCallback() {
   const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

   if (sessionError || !sessionData?.session?.user) {
      console.error("Session retrieval error:", sessionError);
      redirect("/error");
      return;
   }

   const user = sessionData.session.user;

   const { data: userInfo, error: roleError } = await supabase
      .from("User")
      .select("type")
      .eq("uuid", user.id)
      .single();

   if (roleError) {
      console.error("Role fetch error:", roleError);
      redirect("/error");
      return;
   }

   if (userInfo?.type === "admin") {
      redirect("/dashboard");
   } else {
      redirect("/dashboard");
   }
}

// Google OAuth
export async function signInWithGoogle(redirectUrl: string) {
   const { data, error: authError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
         redirectTo: redirectUrl,
         queryParams: {
            access_type: "offline",
            prompt: "consent",
         },
      },
   });

   if (authError) {
      console.error("Sign-in error:", authError);
      redirect("/error");
      return;
   }

   redirect(data.url); 
}

// Signout 
export async function signout() {
   const { error } = await supabase.auth.signOut();

   if (error) {
      console.error("Sign-out error:", error);
      redirect("/error");
      return;
   }

   redirect("/logout");
}
