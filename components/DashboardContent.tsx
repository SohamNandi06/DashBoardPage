import { FC } from "react";
import { Plus,  } from "lucide-react";
import { BsFillArrowUpRightCircleFill, BsArrowUpRightCircle } from "react-icons/bs";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import Stopwatch from "./Stopwatch";

const DashboardContent: FC = () => {
  return (
    <div className="bg-white rounded-lg">
    <div className="flex justify-between items-center px-4 mb-6">
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mt-6">Dashboard</h1>
    <p className="text-sm text-gray-500 mt-1">
      Plan, prioritize, and accomplish your tasks with ease.
    </p>
  </div>
  <div className="flex gap-2">
    <button className="bg-gradient-to-br from-green-800 to-green-600 text-white font-medium px-5 py-2 rounded-full text-sm shadow hover:opacity-90 transition">
      + Add Project
    </button>
    <button className="border border-green-800 text-green-800 font-medium px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
      Import Data
    </button>
  </div>
</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {/* Top Stats Cards */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total Projects</span>
          <BsFillArrowUpRightCircleFill className="w-6 h-6" />
        </div>
        <div className="text-4xl font-bold mt-2">24</div>
        <div className="text-xs mt-1 text-green-100">↑ Increased from last month</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:bg-gray-100">
        <div className="flex justify-between items-center text-gray-500">
          <span className="font-semibold">Ended Projects</span>
          <BsArrowUpRightCircle className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold mt-2">10</div>
        <div className="text-xs mt-1 text-green-500">↑ Increased from last month</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:bg-gray-100">
        <div className="flex justify-between items-center text-gray-500">
          <span className="font-semibold">Running Projects</span>
          <BsArrowUpRightCircle className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold mt-2">12</div>
        <div className="text-xs mt-1 text-green-500">↑ Increased from last month</div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow hover:bg-gray-100">
        <div className="flex justify-between items-center text-gray-500">
          <span className="font-semibold">Pending Project</span>
          <BsArrowUpRightCircle className="w-6 h-6" />
        </div>
        <div className="text-3xl font-bold mt-2">2</div>
        <div className="text-xs mt-1 text-yellow-500">On Discuss</div>
      </div>

      {/* Project Analytics */}
      <div className="sm:col-span-2 lg:col-span-2 bg-white p-4 rounded-xl shadow hover:bg-gray-100">
        <h3 className="font-bold text-xl mb-15">Project Analytics</h3>
        <div className="flex justify-between items-end h-40">
          {[
            { label: "S", height: 120, filled: false, dark: false},
            { label: "M", height: 164, filled: true, dark:true},
            { label: "T", height: 148, filled: true, value: "74%", dark:false },
            { label: "W", height: 180, filled: true, dark:true },
            { label: "T", height: 180, filled: false, dark: false },
            { label: "F", height: 100, filled: false,dark: false },
            { label: "S", height: 140, filled: false, dark:false },
          ].map((bar, i) => (
            <div key={i} className="flex flex-col items-center gap-2 relative group">
              {bar.value && (
                <div className="absolute -top-6 text-xs bg-white px-2 py-0.5 rounded-md border shadow text-gray-700 opacity-0 group-hover:opacity-100 transition">
                  {bar.value}
                </div>
              )}
              <div
                className={`w-5 lg:w-15 rounded-4xl ${
                  bar.filled ? bar.dark ? "bg-green-900":"bg-green-600" : "bg-[url(/stripes3.jpg)] "
                }`}
                style={{ height: `${bar.height}px` }}
              />
              <span className="text-xs text-gray-500">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reminders */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-between hover:bg-gray-100">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reminders</h3>
        <div className="mb-4">
          <p className="text-4xl text-green-800 leading-tight mb-1">Meeting with Arc Company</p>
          <p className="text-sm text-gray-500">Time : 02.00 pm - 04.00 pm</p>
        </div>
        <button className="bg-gradient-to-br from-green-800 to-green-600 hover:bg-green-800 transition text-white text-sm font-medium rounded-full py-2 flex justify-center items-center gap-2">
          <AiTwotoneVideoCamera className="w-4 h-4" />
          Start Meeting
        </button>
      </div>

      {/* Project List */}
      <div className="bg-white p-4 rounded-xl shadow hover:bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Project</h3>
          <button className="text-sm px-3 py-1 border border-gray-300 rounded-full flex items-center gap-1 text-gray-600 hover:bg-green-100">
            <Plus className="w-4 h-4" />
            New
          </button>
        </div>
        <ul className="space-y-4">
          {[
            { name: "Develop API Endpoints", date: "Nov 26, 2024", color: "bg-blue-600" },
            { name: "Onboarding Flow", date: "Nov 28, 2024", color: "bg-green-600" },
            { name: "Build Dashboard", date: "Nov 30, 2024", color: "bg-yellow-500" },
            { name: "Optimize Page Load", date: "Dec 5, 2024", color: "bg-orange-500" },
            { name: "Cross-Browser Testing", date: "Dec 6, 2024", color: "bg-purple-600" },
          ].map((proj, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`w-3 h-3 mt-1 rounded-full ${proj.color}`} />
              <div>
                <p className="text-sm font-medium text-gray-800">{proj.name}</p>
                <p className="text-xs text-gray-500">Due date: {proj.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Team Collaboration */}
      <div className="sm:col-span-2 lg:col-span-2 bg-white p-4 rounded-xl shadow hover:bg-gray-100">
  <div className="flex justify-between items-center mb-4">
    <h3 className="font-semibold">Team Collaboration</h3>
    <button className="text-sm text-green-900 font-medium border px-3 py-1 rounded-full hover:bg-green-100">
      + Add Member
    </button>
  </div>
  <ul className="space-y-3 text-sm">
    {[
      {
        name: "Alexandra Deff",
        task: "Github Project Repository",
        status: "Completed",
        color: "bg-green-100 text-green-700",
        pfp: "/pfp1.avif",
      },
      {
        name: "Edwin Adenike",
        task: "User Authentication System",
        status: "In Progress",
        color: "bg-yellow-100 text-yellow-700",
        pfp: "/pfp2.avif",
      },
      {
        name: "Isaac Oluw",
        task: "Search & Filter Functionality",
        status: "Pending",
        color: "bg-red-100 text-red-700",
        pfp: "/pfp3.avif",
      },
      {
        name: "David Oshodi",
        task: "Responsive Layout",
        status: "In Progress",
        color: "bg-yellow-100 text-yellow-700",
        pfp: "/pfp4.avif",
      },
    ].map((member, i) => (
      <li key={i} className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={member.pfp}
            alt={member.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium">{member.name}</div>
            <div className="text-xs text-gray-500">
              Working on{" "}
              <span className="font-semibold text-black">{member.task}</span>
            </div>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${member.color}`}
        >
          {member.status}
        </span>
      </li>
    ))}
  </ul>
</div>


      {/* Project Progress */}
 <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center hover:bg-gray-100">
  <h3 className="text-sm font-semibold text-gray-800 mb-4">Project Progress</h3>

  {/* Semi-Circular Chart */}
  <div className="relative w-56 h-32 mb-6">
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Completed - 30% */}
      <path
        d="M20,100 A80,80 0 0,1 70,36"
        fill="none"
        stroke="#166534"
        strokeWidth="20"
        strokeLinecap="round"
      />
      {/* In Progress - 40% */}
      <path
        d="M70,36 A80,80 0 0,1 130,36"
        fill="none"
        stroke="#22c55e"
        strokeWidth="20"
        strokeLinecap="round"
      />
      {/* Pending - 30% */}
      <path
        d="M130,36 A80,80 0 0,1 180,100"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>

    {/* Center Text */}
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">
      41%
    </div>
  </div>

  {/* Legend */}
  <div className="flex flex-col gap-1 text-xs text-gray-600">
    <div className="flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-[#166534]" /> Completed
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" /> In Progress
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-[#9ca3af]" /> Pending
    </div>
  </div>
</div>


      {/* Time Tracker */}
      <Stopwatch />
    </div>
    </div>
  );
};

export default DashboardContent;
