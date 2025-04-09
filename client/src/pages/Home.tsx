import Footer from "../components/Footer";
import Login from "../components/Login";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative flex overflow-hidden">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center z-0 overflow-hidden"
        style={{
          backgroundImage: "url('/river.jpg')",
        }}
      ></div>

      <div className="inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Welcome Message */}
      <div className="flex-1 z-20 flex items-center justify-center text-white text-center">
        <div className="bg-white/20 p-6 max-w-xl mx-auto rounded-lg shadow-lg backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Eddy Out your river camp planner!
          </h1>
          <p className="text-lg text-gray-800">
            Plan your float, share your route, and hit the river!
          </p>
        </div>
      </div>

      {/* Login Sidebar */}
      <div className="w-full sm:w-96 bg-white bg-opacity-90 z-20 p-6 shadow-xl flex flex-col justify-center mt-16">
        <Login />
        <p className="mt-4 text-sm">
          New user?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up!
          </Link>
        </p>
        <div className="flex justify-center mt-10 px-4">
          <img
            src="/Logo_EddyOut.png"
            alt="Eddy Out Logo"
            className="h-w max-w-full object-contain"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
