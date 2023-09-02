import React from "react";
import Sidebar from "./Sidebar";
import DashBoardLayout from "../../container/dashboard/DashboardLayout";

const DashboardLayoutComponent = ({children}) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayoutComponent;
