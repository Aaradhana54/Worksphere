import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    username: "",

    password: "",
  });


  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);


      // LOGIN API

      const response = await api.post(

        "login/",

        formData
      );


      // SAVE TOKEN

      localStorage.setItem(

        "token",

        response.data.access
      );


      // FETCH USER DATA

      const userResponse = await api.get(

        "me/"
      );


      // SAVE USER INFO

      localStorage.setItem(

        "username",

        userResponse.data.username
      );

      localStorage.setItem(

        "role",

        userResponse.data.role
      );


      toast.success("Login Successful 🚀");


      navigate("/dashboard");

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Invalid Credentials ❌");

    } finally {

      setLoading(false);
    }
  };


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-xl">

        {/* HEADER */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-4">

            Welcome Back 👋

          </h1>

          <p className="text-gray-500 text-lg">

            Login to your WorkSphere account

          </p>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* USERNAME */}

          <div>

            <label className="block text-lg font-semibold mb-3">

              Username

            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
              required
            />

          </div>


          {/* PASSWORD */}

          <div>

            <label className="block text-lg font-semibold mb-3">

              Password

            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
              required
            />

          </div>


          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-2xl text-lg hover:bg-gray-800 transition"
          >

            {
              loading
                ? "Logging in..."
                : "Login"
            }

          </button>

        </form>


        {/* REGISTER LINK */}

        <p className="text-center text-gray-500 mt-8">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-black font-semibold"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}