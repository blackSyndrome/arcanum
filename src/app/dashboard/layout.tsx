import NavigationBar from "@/components/dashboard/NavigationBar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
