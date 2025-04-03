import express from "express";
import type { Request, Response } from "express";
import { Trip } from "../../models/index.js";

const router = express.Router();

// GET /trips - Get all trips
router.get("/", async (_req: Request, res: Response) => {
  try {
    const trips = await Trip.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(trips);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /trips/:id - Get a trip by id
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findByPk(id, {});
    if (trip) {
      res.json(trip);
    } else {
      res.status(404).json({ message: "Trip not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /trips - Create a new trip
router.post("/", async (req: Request, res: Response) => {
  const { tripname, startdate, enddate, putin, takeout, crewnum } = req.body;
  try {
    const newTrip = await Trip.create({
      tripname,
      startdate,
      enddate,
      putin,
      takeout,
      crewnum,
    });
    res.status(201).json(newTrip);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /trips/:id - Update a trip by id
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { tripname, password } = req.body;
  try {
    const trip = await Trip.findByPk(id);
    if (trip) {
      trip.tripname = tripname;
      trip.password = password;
      await trip.save();
      res.json(trip);
    } else {
      res.status(404).json({ message: "Trip not found" });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /trips/:id - Delete a trip by id
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const trip = await Trip.findByPk(id);
    if (trip) {
      await trip.destroy();
      res.json({ message: "Trip deleted" });
    } else {
      res.status(404).json({ message: "Trip not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as tripRouter };
