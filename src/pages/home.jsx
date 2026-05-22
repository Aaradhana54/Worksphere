import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">

        <h1 className="text-3xl font-bold">

          WorkSphere 🚀

        </h1>

        <div className="flex items-center gap-4">

          <Link to="/login">

            <button className="px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition">

              Login

            </button>

          </Link>

          <Link to="/register">

            <button className="px-6 py-3 rounded-2xl bg-black text-white hover:opacity-90 transition">

              Get Started

            </button>

          </Link>

        </div>

      </nav>


      {/* HERO SECTION */}

      <section className="px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="uppercase tracking-widest text-gray-500 font-semibold mb-4">

            AI Powered SaaS Platform

          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">

            Manage Teams, Projects & Tasks in One Place 🚀

          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">

            WorkSphere helps companies manage employees,
            projects, tasks, analytics and productivity.

          </p>

          <div className="flex gap-4">

            <Link to="/register">

              <button className="bg-black text-white px-8 py-4 rounded-2xl text-lg">

                Start Free Trial

              </button>

            </Link>

            <button className="border border-gray-300 px-8 py-4 rounded-2xl text-lg">

              Live Demo

            </button>

          </div>

        </div>


        <div className="bg-white p-10 rounded-3xl shadow-2xl">

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-gray-500 mb-2">

                Projects

              </h3>

              <h1 className="text-5xl font-bold">

                24

              </h1>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-gray-500 mb-2">

                Tasks

              </h3>

              <h1 className="text-5xl font-bold">

                186

              </h1>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-gray-500 mb-2">

                Employees

              </h3>

              <h1 className="text-5xl font-bold">

                42

              </h1>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-gray-500 mb-2">

                Productivity

              </h3>

              <h1 className="text-5xl font-bold">

                89%

              </h1>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}