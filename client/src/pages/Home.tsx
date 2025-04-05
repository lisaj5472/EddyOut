import Login from "../components/Login";

export default function Home() {
  return (
    <div className="relative min-h-screen flex">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/river.jpg')",
        }}
      ></div>

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Welcome Message */}
      <div className="flex-1 z-20 flex items-center justify-center text-white text-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Eddy Out your river camp planner!
          </h1>
          <p className="text-lg">
            Plan your float, share your route, and hit the river!
          </p>
        </div>
      </div>

      {/* Login Sidebar */}
      <div className="w-full sm:w-96 bg-white bg-opacity-90 z-20 p-6 shadow-xl">
        <Login />
      </div>
    </div>
  );
}
