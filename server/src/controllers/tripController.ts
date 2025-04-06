import { Request, Response } from "express";
import { Trip } from "../models/trip";

export const getAllTrips = async (_req: Request, res: Response) => {
    try {
        const trips = await Trip.findAll();
        res.json(trips);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getTripById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const trip = await Trip.findByPk(id);
        if (trip) {
            res.json(trip);
        } else {
            res.status(404).json({ message: "Trip not found" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createTrip = async (req: Request, res: Response) => {
    const { riverName, startDate, endDate, putIn, takeOut, crewNum, organizerId } = req.body;
    try {
        const newTrip = await Trip.create({ riverName, startDate, endDate, putIn, takeOut, crewNum, organizerId });
        res.status(201).json(newTrip);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const updateTrip = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { riverName, startDate, endDate, putIn, takeOut, crewNum } = req.body;
    try {
        const trip = await Trip.findByPk(id);
        if (trip) {
            trip.riverName = riverName;
            trip.startDate = startDate;
            trip.endDate = endDate;
            trip.putIn = putIn;
            trip.takeOut = takeOut;
            trip.crewNum = crewNum;
            await trip.save();
            res.json(trip);
        } else {
            res.status(404).json({ message: "Trip not found" });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteTrip = async (req: Request, res: Response) => {
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
};
