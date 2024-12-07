import { createClient } from "../../utils/supabase/client";

export const handleCreateIdentification = async (
  imageName: string,
  role: string
) => {
  const supabase = createClient();
  const userUID = (await supabase.auth.getUser()).data.user?.id;
  const { status, error, data } = await supabase
    .schema("public")
    .from("identification")
    .select("id")
    .eq("id,", userUID);
  if (data?.length !== 0) {
    console.log(
      "Your submission is already on process, redirecting to dashboard"
    );
    return { status, error };
  } else {
    const { error, status } = await supabase
      .schema("public")
      .from("identification")
      .insert({
        image_name: imageName,
        proposed_role: role,
      });

    return { status, error };
  }
};
