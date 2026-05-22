import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Dashboard() {

  const [stats, setStats] = useState({

    total_projects: 0,

    total_tasks: 0,

    total_employees: 0,
  });

  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetchDashboard();

  }, []);


  const fetchDashboard = async () => {

    try {

      setLoading(true);


      // ANALYTICS

      const analyticsResponse = await api.get(

        "analytics/dashboard/"
      );

      setStats(analyticsResponse.data);


      // ACTIVITY LOGS

      const activityResponse = await api.get(

        "activity-logs/"
      );

      setActivities(activityResponse.data);

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Load Dashboard ❌");

    } finally {

      setLoading(false);
    }
  };


  if (loading) {

    return (

      <DashboardLayout>

        <div className="flex items-center justify-center h-[70vh]">

          <h1 className="text-4xl font-bold animate-pulse">

            Loading Dashboard...

          </h1>

        </div>

      </DashboardLayout>
    );
  }


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-3">

          Dashboard 📊

        </h1>

        <p className="text-gray-500 text-lg">

          Monitor company performance and workflows

        </p>

      </div>


      {/* STATS */}

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


      {/* RECENT ACTIVITY */}

      <div className="bg-white p-8 rounded-3xl shadow-sm">

        <h2 className="text-3xl font-bold mb-6">

          Recent Activity ⚡

        </h2>

        <div className="space-y-5">

          {
            activities.length > 0 ? (

              activities.map((activity) => (

                <div
                  key={activity.id}
                  className="border-b pb-4"
                >

                  <p className="font-semibold">

                    {activity.action}

                  </p>

                  <p className="text-gray-500 text-sm">

                    User: {activity.user}

                  </p>

                </div>
              ))

            ) : (

              <p className="text-gray-500">

                No Activity Found

              </p>
            )
          }

        </div>

      </div>

    </DashboardLayout>
  );
}