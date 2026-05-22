import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({

    title: "",

    description: "",

    priority: "MEDIUM",

    due_date: "",

    project: "",
  });


  useEffect(() => {

    fetchTasks();

    fetchProjects();

  }, []);


  const fetchTasks = async () => {

    try {

      const response = await api.get(

        "tasks/"
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

      toast.error("Failed To Load Tasks ❌");
    }
  };


  const fetchProjects = async () => {

    try {

      const response = await api.get(

        "projects/"
      );

      setProjects(response.data);

    } catch (error) {

      console.log(error);
    }
  };


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const createTask = async () => {

    try {

      await api.post(

        "tasks/",

        formData
      );

      toast.success("Task Created Successfully 🚀");

      setShowModal(false);

      setFormData({

        title: "",

        description: "",

        priority: "MEDIUM",

        due_date: "",

        project: "",
      });

      fetchTasks();

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Create Task ❌");
    }
  };


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">

            Tasks 📋

          </h1>

          <p className="text-gray-500 text-lg">

            Manage all company tasks

          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-6 py-4 rounded-2xl text-lg"
        >

          + Create Task

        </button>

      </div>


      {/* TASKS GRID */}

      <div className="grid grid-cols-3 gap-8">

        {
          tasks.map((task) => (

            <div
              key={task.id}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold">

                  {task.title}

                </h2>

                <span className="bg-gray-200 px-4 py-2 rounded-full text-sm">

                  {task.priority}

                </span>

              </div>

              <p className="text-gray-600 mb-6">

                {task.description}

              </p>

              <p className="text-gray-500">

                Due: {task.due_date}

              </p>

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

                  Create Task 📋

                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className="text-2xl"
                >

                  ✖

                </button>

              </div>


              <div className="space-y-5">

                {/* TITLE */}

                <input
                  type="text"
                  name="title"
                  placeholder="Task Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />


                {/* DESCRIPTION */}

                <textarea
                  rows="4"
                  name="description"
                  placeholder="Task Description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />


                {/* PROJECT */}

                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                >

                  <option value="">

                    Select Project

                  </option>

                  {
                    projects.map((project) => (

                      <option
                        key={project.id}
                        value={project.id}
                      >

                        {project.title}

                      </option>
                    ))
                  }

                </select>


                {/* PRIORITY */}

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                >

                  <option value="HIGH">

                    HIGH

                  </option>

                  <option value="MEDIUM">

                    MEDIUM

                  </option>

                  <option value="LOW">

                    LOW

                  </option>

                </select>


                {/* DUE DATE */}

                <input
                  type="date"
                  name="due_date"
                  value={formData.due_date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />


                {/* BUTTON */}

                <button
                  onClick={createTask}
                  className="w-full bg-black text-white py-4 rounded-2xl text-lg"
                >

                  Create Task

                </button>

              </div>

            </div>

          </div>
        )
      }

    </DashboardLayout>
  );
}