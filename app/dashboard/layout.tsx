import DashboardFooter from "../../components/dashboard/footer";
import NavigationBar from "../../components/dashboard/navigation-bar";
import { Input } from "../../components/ui/input";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NavigationBar />
      <div className="flex justify-center items-center bg-zinc-900 h-24">
        <Input
          type="search"
          placeholder="Search for authors, theses, and periodicals"
          className="h-12 w-[70%] px-4 py-2 rounded-xl shadow-md text-sm bg-white focus:outline-none"
        />
      </div>
      <div className="flex-1 h-screen">{children}</div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
