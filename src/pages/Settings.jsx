import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import toast from "react-hot-toast";


export default function Settings() {

  const [formData, setFormData] = useState({

    companyName: "WorkSphere",

    email: "admin@gmail.com",

    theme: "Light",
  });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };


  const saveSettings = () => {

    toast.success("Settings Saved Successfully 🚀");
  };


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-2">

          Settings ⚙️

        </h1>

        <p className="text-gray-500 text-lg">

          Manage your company preferences

        </p>

      </div>


      {/* SETTINGS CARD */}

      <div className="bg-white p-10 rounded-3xl shadow-sm max-w-4xl">

        <div className="space-y-8">

          {/* COMPANY NAME */}

          <div>

            <label className="block text-lg font-semibold mb-3">

              Company Name

            </label>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
            />

          </div>


          {/* EMAIL */}

          <div>

            <label className="block text-lg font-semibold mb-3">

              Company Email

            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
            />

          </div>


          {/* THEME */}

          <div>

            <label className="block text-lg font-semibold mb-3">

              Theme

            </label>

            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
            >

              <option>

                Light

              </option>

              <option>

                Dark

              </option>

            </select>

          </div>


          {/* PASSWORD */}

          <div>

            <label className="block text-lg font-semibold mb-3">

              Change Password

            </label>

            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border border-gray-300 p-4 rounded-2xl outline-none"
            />

          </div>


          {/* BUTTON */}

          <button
            onClick={saveSettings}
            className="bg-black text-white px-8 py-4 rounded-2xl text-lg"
          >

            Save Settings

          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}