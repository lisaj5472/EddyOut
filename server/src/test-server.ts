import express from "express";
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/api/trips/:id", (req, res) => {
  console.log("✅ Mock GET /api/trips/:id hit with ID:", req.params.id);
  res.json({
    id: Number(req.params.id),
    riverName: "Mock River",
    startDate: "2025-07-01",
    endDate: "2025-07-04",
    putIn: "Mock Launch",
    takeOut: "Mock Takeout",
    crewNum: 4,
  });
});

app.listen(PORT, () => {
  console.log(`🧪 Test server running on http://localhost:${PORT}`);
});
