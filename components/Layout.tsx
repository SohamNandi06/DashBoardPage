"use client";

import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardContent from "./DashboardContent";

const Layout = ({ children }: { children?: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Right Section */}
      <div className="flex-1 flex flex-col p-4 lg:p-6 mt-4 lg:mt-5">
        <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <div className="mt-4">
          <DashboardContent />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
