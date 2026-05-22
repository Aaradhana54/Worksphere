import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Employees() {

  const [employees, setEmployees] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({

    username: "",

    email: "",

    password: "",

    role: "EMPLOYEE",
  });


  useEffect(() => {

    fetchEmployees();

  }, []);


  const fetchEmployees = async () => {

    try {

      const response = await api.get(

        "employees/"
      );

      setEmployees(response.data);

    } catch (error) {

      console.log(error.response?.data);
    }
  };


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const createEmployee = async () => {

    try {

      await api.post(

        "employees/create/",

        formData
      );

      toast.success("Employee Created 🚀");

      setShowModal(false);

      setFormData({

        username: "",

        email: "",

        password: "",

        role: "EMPLOYEE",
      });

      fetchEmployees();

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Failed To Create Employee ❌");
    }
  };


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-2">

            Employees 👨‍💻

          </h1>

          <p className="text-gray-500 text-lg">

            Manage your company employees

          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-6 py-4 rounded-2xl text-lg"
        >

          + Add Employee

        </button>

      </div>


      {/* EMPLOYEE GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          employees.map((employee) => (

            <div
              key={employee.id}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >

              <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6">

                {
                  employee.username?.charAt(0).toUpperCase()
                }

              </div>

              <h2 className="text-3xl font-bold mb-2">

                {employee.username}

              </h2>

              <p className="text-gray-500 mb-4">

                {employee.email}

              </p>

              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">

                {employee.role}

              </span>

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

                  Add Employee 👨‍💻

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
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
                >

                  <option value="EMPLOYEE">

                    EMPLOYEE

                  </option>

                  <option value="MANAGER">

                    MANAGER

                  </option>

                </select>

                <button
                  onClick={createEmployee}
                  className="w-full bg-black text-white py-4 rounded-2xl text-lg"
                >

                  Create Employee

                </button>

              </div>

            </div>

          </div>
        )
      }

    </DashboardLayout>
  );
}