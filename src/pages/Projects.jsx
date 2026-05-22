import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Projects() {

  const [projects, setProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({

    title: "",

    description: "",

    deadline: "",
  });


  useEffect(() => {

    fetchProjects();

  }, []);


  const fetchProjects = async () => {

    try {

      const response = await api.get(

        "projects/"
      );

      setProjects(response.data);

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Load Projects ❌");
    }
  };


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const createProject = async () => {

    try {

      await api.post(

        "projects/",

        formData
      );

      toast.success("Project Created 🚀");

      setShowModal(false);

      setFormData({

        title: "",

        description: "",

        deadline: "",
      });

      fetchProjects();

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Create Project ❌");
    }
  };


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">

            Projects 🚀

          </h1>

          <p className="text-gray-500 text-lg">

            Manage all company projects

          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-6 py-4 rounded-2xl text-lg"
        >

          + Create Project

        </button>

      </div>


      {/* PROJECT GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          projects.map((project) => (

            <div
              key={project.id}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition"
            >

              <div className="flex justify-between items-center mb-5">

                <h2 className="text-3xl font-bold">

                  {project.title}

                </h2>

                <span className="bg-black text-white px-4 py-2 rounded-full text-sm">

                  Active

                </span>

              </div>


              <p className="text-gray-600 mb-8">

                {project.description}

              </p>


              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400 text-sm">

                    Deadline

                  </p>

                  <p className="font-semibold">

                    {project.deadline}

                  </p>

                </div>

                <a
  href={`/projects/${project.id}`}
  className="bg-gray-100 px-5 py-3 rounded-2xl"
>

  View

</a>

              </div>

            </div>
          ))
        }

      </div>


      {/* MODAL */}

      {
        showModal && (

          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-full max-w-2xl p-10 rounded-3xl">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-4xl font-bold">

                  Create Project 🚀

                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-2xl"
                >

                  ✖

                </button>

              </div>


              <div className="space-y-5">

                <input
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />


                <textarea
                  rows="5"
                  name="description"
                  placeholder="Project Description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />


                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />


                <button
                  onClick={createProject}
                  className="w-full bg-black text-white py-4 rounded-2xl text-lg"
                >

                  Create Project

                </button>

              </div>

            </div>

          </div>
        )
      }

    </DashboardLayout>
  );
}