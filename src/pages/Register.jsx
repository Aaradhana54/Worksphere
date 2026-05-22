import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../services/api";


export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    company_name: "",

    username: "",

    email: "",

    password: "",
  });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post(

        "register/",

        formData
      );

      toast.success("Company Registered Successfully 🚀");

      navigate("/login");

    } catch (error) {

  console.log(error.response?.data);

  if (error.response?.data?.password) {

    toast.error(
      "Password must be at least 6 characters ❌"
    );

  } else {

    toast.error("Registration Failed ❌");
  }
}
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="bg-black text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold leading-tight mb-6">

            Create Your Company 🚀

          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">

            Manage employees, projects, tasks and workflows
            with WorkSphere SaaS platform.

          </p>

        </div>


        {/* RIGHT */}

        <div className="p-12">

          <h2 className="text-4xl font-bold mb-2">

            Register

          </h2>

          <p className="text-gray-500 mb-8">

            Create company admin account
          </p>


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* COMPANY NAME */}

            <div>

              <label className="block mb-2 font-medium">

                Company Name

              </label>

              <input
                type="text"
                name="company_name"
                placeholder="Enter company name"
                value={formData.company_name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
              />

            </div>


            {/* USERNAME */}

            <div>

              <label className="block mb-2 font-medium">

                Username

              </label>

              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
              />

            </div>


            {/* EMAIL */}

            <div>

              <label className="block mb-2 font-medium">

                Email

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
              />

            </div>


            {/* PASSWORD */}

            <div>

              <label className="block mb-2 font-medium">

                Password

              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-black"
              />

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
            >

              Create Company

            </button>

          </form>


          <p className="text-gray-500 mt-6 text-center">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-black font-semibold"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}