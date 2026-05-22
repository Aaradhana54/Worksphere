import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Notifications() {

  const [logs, setLogs] = useState([]);


  useEffect(() => {

    fetchLogs();

  }, []);


  const fetchLogs = async () => {

    try {

      const response = await api.get(

        "activity-logs/"
      );

      setLogs(response.data);

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Load Activity Logs ❌");
    }
  };


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-2">

          Activity Logs 🔔

        </h1>

        <p className="text-gray-500 text-lg">

          Monitor recent company activities

        </p>

      </div>


      {/* LOGS */}

      <div className="space-y-6">

        {
          logs.map((log) => (

            <div
              key={log.id}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold">

                  {log.action}

                </h2>

                <span className="text-gray-500 text-sm">

                  {log.created_at}

                </span>

              </div>

              <p className="text-gray-600">

                Performed by: {log.user}

              </p>

            </div>
          ))
        }

      </div>

    </DashboardLayout>
  );
}