import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Analytics() {

  const [stats, setStats] = useState({

    total_projects: 0,

    total_tasks: 0,

    total_employees: 0,
  });


  useEffect(() => {

    fetchAnalytics();

  }, []);


  const fetchAnalytics = async () => {

    try {

      const response = await api.get(

        "analytics/dashboard/"
      );

      setStats(response.data);

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Load Analytics ❌");
    }
  };


  const projectPercentage =
    stats.total_projects * 10;

  const taskPercentage =
    stats.total_tasks * 10;

  const employeePercentage =
    stats.total_employees * 10;


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-2">

          Analytics 📈

        </h1>

        <p className="text-gray-500 text-lg">

          Company productivity and insights

        </p>

      </div>


      {/* TOP STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <p className="text-gray-500 mb-3">

            Total Projects

          </p>

          <h1 className="text-6xl font-bold">

            {stats.total_projects}

          </h1>

        </div>


        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <p className="text-gray-500 mb-3">

            Total Tasks

          </p>

          <h1 className="text-6xl font-bold">

            {stats.total_tasks}

          </h1>

        </div>


        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <p className="text-gray-500 mb-3">

            Total Employees

          </p>

          <h1 className="text-6xl font-bold">

            {stats.total_employees}

          </h1>

        </div>

      </div>


      {/* PERFORMANCE */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* PRODUCTIVITY */}

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-8">

            Productivity 🚀

          </h2>

          <div className="space-y-8">

            {/* PROJECTS */}

            <div>

              <div className="flex justify-between mb-2">

                <span>

                  Projects Completion

                </span>

                <span>

                  {projectPercentage}%

                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-black h-4 rounded-full"
                  style={{
                    width: `${projectPercentage}%`
                  }}
                ></div>

              </div>

            </div>


            {/* TASKS */}

            <div>

              <div className="flex justify-between mb-2">

                <span>

                  Tasks Efficiency

                </span>

                <span>

                  {taskPercentage}%

                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-black h-4 rounded-full"
                  style={{
                    width: `${taskPercentage}%`
                  }}
                ></div>

              </div>

            </div>


            {/* EMPLOYEES */}

            <div>

              <div className="flex justify-between mb-2">

                <span>

                  Employee Performance

                </span>

                <span>

                  {employeePercentage}%

                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-black h-4 rounded-full"
                  style={{
                    width: `${employeePercentage}%`
                  }}
                ></div>

              </div>

            </div>

          </div>

        </div>


        {/* AI INSIGHTS */}

        <div className="bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-8">

            AI Insights 🤖

          </h2>

          <div className="space-y-5">

            <div className="bg-gray-100 p-5 rounded-2xl">

              <p className="font-semibold mb-2">

                Total Projects

              </p>

              <p className="text-gray-600">

                Company currently has
                {" "}
                {stats.total_projects}
                {" "}
                active projects.

              </p>

            </div>


            <div className="bg-gray-100 p-5 rounded-2xl">

              <p className="font-semibold mb-2">

                Task Insights

              </p>

              <p className="text-gray-600">

                Total tasks assigned:
                {" "}
                {stats.total_tasks}

              </p>

            </div>


            <div className="bg-gray-100 p-5 rounded-2xl">

              <p className="font-semibold mb-2">

                Team Strength

              </p>

              <p className="text-gray-600">

                Company has
                {" "}
                {stats.total_employees}
                {" "}
                employees working actively.

              </p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}