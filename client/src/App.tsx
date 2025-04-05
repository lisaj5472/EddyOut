import "./App.css";
// import GearList from "./components/GearList";
// import Home from "./components/Home";
// import Login from "./components/Login";
import FloatPlan from "./components/FloatPlan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/trips/:id" element={<FloatPlan />} />
        {/* <Route path="/gear/:id" element={<GearList />} /> */}
      </Routes>
    </Router>
  );
}
