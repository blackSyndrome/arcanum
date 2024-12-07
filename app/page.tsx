"use client";

import LoginPageLeftSide from "./components/authentication/login-page-left-side";
import LoginPageRightSide from "./components/authentication/login-page-right-side";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <LoginPageLeftSide />
      <LoginPageRightSide />
    </div>
  );
};

export default Home;
