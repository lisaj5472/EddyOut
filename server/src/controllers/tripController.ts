import { Request, Response, NextFunction } from "express";
import { Trip } from "../models/trip.js";

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

export const createTrip = async (req: Request, res: Response): Promise<void> => {
    const { riverName, startDate, endDate, putIn, takeOut, crewNum } = req.body;
    const userName = req.user?.username;

    if (!userName || !riverName || !startDate || !endDate || !putIn || !takeOut || !crewNum) {
        res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newTrip = await Trip.create({ userName, riverName, startDate, endDate, putIn, takeOut, crewNum });
        res.status(201).json(newTrip);
    } catch (error: any) {
        res.status(400).json({ message: error.message, details: error.errors || "No additional error details" });
    }
};

export const updateTrip = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { riverName, startDate, endDate, putIn, takeOut, crewNum } = req.body;
    try {
        const trip = await Trip.findByPk(id);
        if (trip) {
            trip.riverName = riverName || trip.riverName;
            trip.startDate = startDate || trip.startDate;
            trip.endDate = endDate || trip.startDate;
            trip.putIn = putIn || trip.putIn;
            trip.takeOut = takeOut || trip.takeOut;
            trip.crewNum = crewNum || trip.crewNum;
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
