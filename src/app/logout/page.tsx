import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    const logoutUser = async () => {
      await supabase.auth.signOut();
      setTimeout(() => router.push("/"), 2000);
    };
    logoutUser();
  }, []);

  return <div>You have logged out... redirecting in a sec.</div>;
};

export default Logout;
