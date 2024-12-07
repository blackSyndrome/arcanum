import { createClient } from "../../../utils/supabase/client";

export const handleUploadIdentficationRegistration = async (
  imageName: string,
  image: File
) => {
  const supabase = createClient();
  const filePath = `registration-identification/${imageName}`;

  const { data, error } = await supabase.storage
    .from("user-identification")
    .upload(filePath, image);

  return { data, error };
};
