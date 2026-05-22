import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div className="w-64 h-screen bg-[#111827] text-white p-6">

      <h1 className="text-3xl font-bold mb-12">

        WorkSphere

      </h1>

      <div className="flex flex-col gap-5 text-lg">

        <Link
          to="/dashboard"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/projects"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Projects
        </Link>

        <Link
          to="/tasks"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Tasks
        </Link>

        <Link
          to="/employees"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Employees
        </Link>

        <Link
          to="/analytics"
          className="hover:bg-gray-700 p-3 rounded-lg"
        >
          Analytics
        </Link>

      </div>

    </div>
  );
}