import { createClient } from "../../utils/supabase/client";

export const handleFetchIdentification = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.rpc("fetch_user_with_identification");
  console.log(data, error);
  return { data, error };
};
