import React from "react";
import Sidebar from "./Sidebar";
import DashBoardLayout from "../../container/dashboard/DashboardLayout";

const DashboardLayoutComponent = () => {
  return (
    <div>
      <Sidebar />
      <DashBoardLayout />
    </div>
  );
};

export default DashboardLayoutComponent;
