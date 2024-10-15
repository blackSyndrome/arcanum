"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
   const router = useRouter();
   useEffect(() => {
      setTimeout(() => router.push("/"), 2000);
   }, []);
   return <div>You have logged out... redirecting in a sec.</div>;
}
