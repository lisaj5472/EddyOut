export default function PreLoginHome() {
  return (
    <div className="relative min-h-screen flex">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/river.jpg')", // Place your river image in the public folder
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
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
