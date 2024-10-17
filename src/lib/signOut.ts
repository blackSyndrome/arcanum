import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

export const signout = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign-out error:", error);
    redirect("/error");
  }

  redirect("/logout");
};
