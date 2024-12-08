import { createClient } from "../../utils/supabase/client";

export const handleUserStatus = async () => {
  const supabase = createClient();
  const userUID = (await supabase.auth.getUser()).data.user?.id;

  // Fetch existing user data from the `user_status` table
  const { data: userData, error: getUserError } = await supabase
    .schema("public")
    .from("user_status")
    .select("*")
    .eq("id", userUID);

  if (getUserError) {
    console.log("Error fetching user status:", getUserError.message);
    return "/error";
  }

  const { data: userRegistration, error: getRegistrationError } = await supabase
    .schema("public")
    .from("identification")
    .select("id")
    .eq("id,", userUID);

  if (getRegistrationError) {
    console.log("Error getting identification:", getRegistrationError);
    return "/error";
  }

  if (!userRegistration.length) {
    return "/role";
  }

  console.log("userData", userData);

  if (!userData?.length) {
    const { error: insertError } = await supabase
      .schema("public")
      .from("user_status")
      .insert({
        id: userUID,
        role: "guest",
        verified: false,
      });

    if (insertError) {
      console.log("Error in creating user:", insertError.message);
      return "/error";
    }

    console.log("New user created successfully");
    return "/role"; // Redirect to the guest role
  }

  // If user exists, check if verified
  if (userData[0].verified) {
    switch (userData[0].role) {
      case "student":
        return "/dashboard/student";
      case "librarian":
        return "/dashboard/librarian";
      default:
        return "/dashboard/guest"; // If the role is unexpected, redirect to guest
    }
  } else {
    return "/dashboard/guest"; // If not verified, redirect to guest
  }
};
