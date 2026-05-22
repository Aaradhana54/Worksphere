import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";


export default function DashboardLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();


  const handleLogout = () => {

    localStorage.clear();

    toast.success("Logged Out Successfully 👋");

    navigate("/login");
  };


  const username = localStorage.getItem("username");

  const role = localStorage.getItem("role");


  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* MOBILE OVERLAY */}

      {
        sidebarOpen && (

          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          ></div>
        )
      }


      {/* SIDEBAR */}

      <div
        className={`

          fixed lg:static top-0 left-0 h-screen z-50
          w-72 bg-black text-white p-8
          flex flex-col justify-between
          transform transition-transform duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >

        <div>

          {/* LOGO */}

          <div className="flex justify-between items-center mb-12">

            <h1 className="text-3xl font-bold">

              WorkSphere 🚀

            </h1>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-2xl"
            >

              ✖

            </button>

          </div>


          {/* MENU */}

          <div className="space-y-4">

            <Link to="/dashboard">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Dashboard

              </div>

            </Link>


            <Link to="/projects">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Projects

              </div>

            </Link>


            <Link to="/tasks">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Tasks

              </div>

            </Link>


            <Link to="/employees">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Employees

              </div>

            </Link>


            <Link to="/analytics">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Analytics

              </div>

            </Link>


            <Link to="/notifications">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Notifications

              </div>

            </Link>


            <Link to="/settings">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Settings

              </div>

            </Link>


            <Link to="/profile">

              <div className="p-4 rounded-2xl hover:bg-gray-800 transition cursor-pointer">

                Profile

              </div>

            </Link>

          </div>

        </div>


        {/* USER SECTION */}

        <div className="bg-gray-900 p-5 rounded-3xl">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">

              {
                username?.charAt(0).toUpperCase()
              }

            </div>

            <div>

              <h3 className="font-bold">

                {username}

              </h3>

              <p className="text-sm text-gray-400">

                {role}

              </p>

            </div>

          </div>


          {/* LOGOUT */}

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 py-3 rounded-2xl hover:bg-red-600 transition"
          >

            Logout

          </button>

        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="flex-1 flex flex-col w-full lg:ml-0">

        {/* TOPBAR */}

        <div className="bg-white px-6 lg:px-10 py-6 flex justify-between items-center shadow-sm">

          <div className="flex items-center gap-4">

            {/* HAMBURGER */}

            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-3xl"
            >

              ☰

            </button>


            <div>

              <h2 className="text-2xl lg:text-3xl font-bold">

                Welcome Back 👋

              </h2>

              <p className="text-gray-500 text-sm lg:text-base">

                Manage your company workflows efficiently

              </p>

            </div>

          </div>


          {/* RIGHT SECTION */}

          <div className="hidden md:flex items-center gap-6">

            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-5 py-3 rounded-2xl outline-none w-80"
            />

            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">

              {
                username?.charAt(0).toUpperCase()
              }

            </div>

          </div>

        </div>


        {/* PAGE CONTENT */}

        <div className="p-4 lg:p-10">

          {children}

        </div>

      </div>

    </div>
  );
}