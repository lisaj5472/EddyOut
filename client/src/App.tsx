// Uncomment the following for production:
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";

// Remove the following after testing:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatPlan from "./pages/FloatPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trips/:id" element={<FloatPlan />} />
        {/* Optional: default route or placeholder */}
        <Route
          path="/"
          element={
            <div className="card">
              <h1>Welcome to the River Trip App!</h1>
              <p>
                Try visiting <code>/trips/1</code> to test your FloatPlan page.
              </p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Uncomment the following for production:
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
