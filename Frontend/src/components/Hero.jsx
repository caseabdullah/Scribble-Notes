import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";  
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate = useNavigate();
  const handleDashboard = async () => {
    try {
      await api.get("/dashboard");
      navigate("/dashboard");
    } catch {
      navigate("/login");
    }
  };

  return (
    <section className="bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between">

        {/* Left */}

        <div className="lg:w-1/2 space-y-8">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Organize smarter
          </span>

          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
            Capture your
            <br />
            ideas
            <span className="text-violet-500"> effortlessly.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-8 max-w-lg">
            Store notes, create todos, organize your life and never lose an
            important idea again.
          </p>

          <div className="flex gap-5">

            <button
            onClick={handleDashboard}
            className="inline-flex items-center gap-2 bg-violet-200 hover:bg-violet-300 transition duration-300 px-5 py-3 rounded-xl font-lg cursor-pointer">
              Go to Dashboard
              <ArrowRight size={25} />
            </button>
  


          </div>

        </div>

        {/* Right */}

        <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative">

          <div className="bg-yellow-200 w-60 p-6 rounded-xl shadow-xl rotate-[-8deg] absolute left-10 top-6">

            <h3 className="font-bold mb-3">Today's Tasks</h3>

            <ul className="space-y-2">
              <li>✔ Finish project</li>
              <li>✔ Read 20 pages</li>
              <li>⬜ Workout</li>
              <li>⬜ Call friend</li>
            </ul>

          </div>

          <div className="bg-blue-200 w-56 h-72 rounded-xl shadow-xl rotate-[8deg] absolute right-6 top-0 flex items-center justify-center">

            <h2 className="text-4xl">💡</h2>

          </div>

          <div className="bg-white w-72 p-6 rounded-xl shadow-2xl mt-48">

            <h3 className="font-bold">
              Meeting Notes
            </h3>

            <p className="text-gray-500 mt-2">
              Build Notes App
            </p>

            <div className="flex gap-2 mt-5">

              <span className="bg-yellow-200 px-3 py-1 rounded-full text-sm">
                MERN
              </span>

              <span className="bg-blue-200 px-3 py-1 rounded-full text-sm">
                React
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;