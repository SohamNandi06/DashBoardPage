import { FC } from "react";
import { Search, Mail, Bell, Menu } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="w-full bg-white p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-xl shadow-sm gap-4">
      {/* Top Row (Toggle + Search) */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
        {/* Sidebar Toggle */}
        <button
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 lg:hidden self-start"
          onClick={onToggleSidebar}
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full sm:w-auto flex-1">
          <Search className="text-gray-500 w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Search task"
            className="bg-transparent outline-none text-sm text-gray-800 flex-1"
          />
          <div className="bg-white text-xs px-2 py-1 rounded-md text-gray-600 border border-gray-200 font-medium ml-2 hidden sm:block">
            ⌘ F
          </div>
        </div>
      </div>

      {/* Bottom Row (Icons + User) */}
      <div className="flex items-center justify-between gap-3 w-full lg:w-auto">
        {/* Mail and Bell Icons */}
        <div className="flex gap-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Mail className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <Bell className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1.5">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/mainpfp.jpg"
              alt="User Avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="text-sm hidden sm:block">
            <div className="text-gray-800 font-medium">Totok Michael</div>
            <div className="text-gray-500 text-xs">tmichael20@mail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
