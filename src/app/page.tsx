import LoginPageLeftSide from "@/components/authentication/LoginPageLeftSide";
import LoginPageRightSide from "@/components/authentication/LoginPageRightSide";

export default function Home() {
   return (
      // Root div
      <div className="flex flex-col md:flex-row h-screen">
         <LoginPageLeftSide />
         <LoginPageRightSide />
      </div>
   );
}
