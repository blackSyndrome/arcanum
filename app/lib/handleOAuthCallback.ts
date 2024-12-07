/* "use client";

import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

// Post Auth (if successful), this will run

export const handleOAuthCallback = async () => {
  const supabase = createClient();
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  console.log("session data", sessionData);
  if (sessionError || !sessionData?.session?.user) {
    console.error("Session retrieval error:", sessionError);
    redirect("/error");
  }

  const user = sessionData.session.user;
  console.log("user", user);

  const { data: userInfo, error: roleError } = await supabase
    .from("User")
    .select("type")
    .eq("uuid", user.id)
    .single();

  if (roleError) {
    console.error("Role fetch error:", roleError);
    redirect("/error");
  }
  console.log("userInfo", userInfo);
  // Change when we have role-based login feature already
  if (userInfo?.type === "admin") {
    redirect("/dashboard");
  } else {
    redirect("/dashboard");
  }
}; */

// Google OAuth

// Signout
