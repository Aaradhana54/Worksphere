import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function ProjectDetails() {

  const { id } = useParams();

  const [project, setProject] = useState(null);


  useEffect(() => {

    fetchProject();

  }, []);


  const fetchProject = async () => {

    try {

      const response = await api.get(

        `projects/${id}/`
      );

      setProject(response.data);

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Load Project ❌");
    }
  };


  if (!project) {

    return (

      <DashboardLayout>

        <div className="flex items-center justify-center h-[70vh]">

          <h1 className="text-4xl font-bold animate-pulse">

            Loading Project...

          </h1>

        </div>

      </DashboardLayout>
    );
  }


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <div className="flex justify-between items-center mb-5">

          <h1 className="text-5xl font-bold">

            {project.title}

          </h1>

          <span className="bg-black text-white px-5 py-3 rounded-full">

            Active

          </span>

        </div>

        <p className="text-gray-500 text-lg">

          Detailed overview of project

        </p>

      </div>


      {/* CONTENT */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-6">

            Description 📄

          </h2>

          <p className="text-gray-600 leading-8 text-lg">

            {project.description}

          </p>

        </div>


        {/* RIGHT */}

        <div className="bg-white p-10 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-8">

            Project Info 🚀

          </h2>


          <div className="space-y-6">

            <div>

              <p className="text-gray-400 mb-2">

                Deadline

              </p>

              <h3 className="text-xl font-bold">

                {project.deadline}

              </h3>

            </div>


            <div>

              <p className="text-gray-400 mb-2">

                Status

              </p>

              <h3 className="text-xl font-bold">

                Active

              </h3>

            </div>


            <div>

              <p className="text-gray-400 mb-2">

                Team Members

              </p>

              <h3 className="text-xl font-bold">

                5 Members

              </h3>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}