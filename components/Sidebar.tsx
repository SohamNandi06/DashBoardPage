"use client";

import { FC } from "react";
import Image from "next/image";
import {
  Home,
  CheckSquare,
  Calendar,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";

type MenuItem = {
  label: string;
  icon: JSX.Element;
  badge?: string;
  active?: boolean;
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <Home size={20} />, active: true },
  { label: "Tasks", icon: <CheckSquare size={20} />, badge: "12+" },
  { label: "Calendar", icon: <Calendar size={20} /> },
  { label: "Analytics", icon: <BarChart2 size={20} /> },
  { label: "Team", icon: <Users size={20} /> },
];

const generalItems: MenuItem[] = [
  { label: "Settings", icon: <Settings size={20} /> },
  { label: "Help", icon: <HelpCircle size={20} /> },
  { label: "Logout", icon: <LogOut size={20} /> },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed z-40 top-0 left-0 h-full w-64 bg-white border-r p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:rounded-xl lg:shadow-sm lg:mt-5 lg:h-[95vh]`}
    >
      <div>
        {/* Close button for mobile */}
        <button
          className="lg:hidden absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 pl-2 mt-1">
          <div className="bg-green-100 p-2 rounded-full">
            <Image src="/logo.webp" alt="Logo" width={24} height={100} />
          </div>
          <span className="font-semibold text-xl text-gray-800">Donezo</span>
        </div>

        {/* Menu */}
        <div className="text-gray-400 text-sm font-semibold mb-2">MENU</div>
        <nav className="flex flex-col gap-2 mb-6">
          {menuItems.map(({ label, icon, badge, active }) => (
            <div
              key={label}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                active
                  ? "bg-green-100 text-green-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                {icon}
                <span>{label}</span>
              </div>
              {badge && (
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* General */}
        <div className="text-gray-400 text-sm font-semibold mb-2">GENERAL</div>
        <nav className="flex flex-col gap-2">
          {generalItems.map(({ label, icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Download Section */}
      <div className="bg-[url(/greenbg2.jpg)] bg-cover h-35 text-white rounded-xl p-4 mt-6">
        <div className="text-sm mb-2 font-medium leading-tight">
          Download our <br /> Mobile App
        </div>
        <div className="text-xs text-green-200 mb-3">Get easy in another way</div>
        <button className="bg-white text-green-700 text-sm font-semibold px-3 py-1.5 rounded-full">
          Download
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
