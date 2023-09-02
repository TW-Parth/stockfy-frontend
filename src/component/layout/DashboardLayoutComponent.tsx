import React from "react";
import Sidebar from "./Sidebar";
import Header from "../global/Header";

const DashboardLayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app-wrapper dashboard-wrapper">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default DashboardLayoutComponent;
