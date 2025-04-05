import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TripList from "./pages/TripList"; // Placeholder: dashboard of trips
import TripDetails from "./pages/TripDetails"; // Placeholder for trip overview
import FloatPlan from "./pages/FloatPlan";
import GearList from "./pages/GearList"; // For prop handling
import Meals from "./pages/Meals"; // Placeholder
import Crew from "./pages/Crew"; // Placeholder

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Pre-login home page */}
        <Route path="/" element={<Home />} />

        {/* Dashboard (list of user's trips after login) */}
        <Route path="/dashboard" element={<TripList />} />

        {/* Trip details page (overview with links to sub-pages) */}
        <Route path="/trips/:id" element={<TripDetails />} />

        {/* Trip sub-pages */}
        <Route path="/trips/:id/floatplan" element={<FloatPlan />} />
        <Route path="/trips/:id/gear" element={<GearList />} />
        <Route path="/trips/:id/meals" element={<Meals />} />
        <Route path="/trips/:id/crew" element={<Crew />} />
      </Routes>
    </Router>
  );
}
