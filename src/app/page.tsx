"use client";

import LoginPageLeftSide from "@/components/authentication/LoginPageLeftSide";
import LoginPageRightSide from "@/components/authentication/LoginPageRightSide";

const Home = () => {
   return (
      <div className="flex flex-col md:flex-row h-screen">
         <LoginPageLeftSide />
         <LoginPageRightSide />
      </div>
   );
};

export default Home;
