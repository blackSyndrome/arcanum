import NavigationBar from "@/components/dashboard/NavigationBar";
import { Input } from "@/components/ui/input";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      <div className="flex justify-center items-center bg-zinc-900 h-24">
        <Input
          type="search"
          placeholder="Search for authors, theses, and periodicals"
          className="h-12 w-[70%] px-4 py-2 rounded-md shadow-md text-sm bg-gray-100 focus:outline-none"
        />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
