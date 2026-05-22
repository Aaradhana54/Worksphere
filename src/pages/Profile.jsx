import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import api from "../services/api";

import toast from "react-hot-toast";


export default function Profile() {

  const [user, setUser] = useState(null);


  useEffect(() => {

    fetchProfile();

  }, []);


  const fetchProfile = async () => {

    try {

      const response = await api.get(

        "me/"
      );

      setUser(response.data);

    } catch (error) {

      console.log(error);

      toast.error("Failed To Load Profile ❌");
    }
  };


  if (!user) {

    return (

      <DashboardLayout>

        <h1 className="text-4xl font-bold">

          Loading...

        </h1>

      </DashboardLayout>
    );
  }


  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-2">

          My Profile 👨‍💻

        </h1>

        <p className="text-gray-500 text-lg">

          Manage your account information

        </p>

      </div>


      <div className="grid grid-cols-3 gap-8">

        {/* PROFILE CARD */}

        <div className="bg-white p-8 rounded-3xl shadow-sm text-center">

          <div className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-5xl font-bold mx-auto mb-6">

            {
              user.username?.charAt(0).toUpperCase()
            }

          </div>

          <h2 className="text-3xl font-bold mb-2">

            {user.username}

          </h2>

          <p className="text-gray-500 mb-4">

            {user.email}

          </p>

          <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold">

            {user.role}

          </span>

        </div>


        {/* DETAILS */}

        <div className="col-span-2 bg-white p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-8">

            Account Details

          </h2>


          <div className="grid grid-cols-2 gap-6">

            <div>

              <p className="text-gray-500 mb-2">

                Username

              </p>

              <h3 className="text-xl font-bold">

                {user.username}

              </h3>

            </div>


            <div>

              <p className="text-gray-500 mb-2">

                Email

              </p>

              <h3 className="text-xl font-bold">

                {user.email}

              </h3>

            </div>


            <div>

              <p className="text-gray-500 mb-2">

                Role

              </p>

              <h3 className="text-xl font-bold">

                {user.role}

              </h3>

            </div>


            <div>

              <p className="text-gray-500 mb-2">

                Company

              </p>

              <h3 className="text-xl font-bold">

                {
                  user.company?.name || "N/A"
                }

              </h3>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}