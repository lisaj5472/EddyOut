import { Request, Response } from 'express';
import { Schedule } from '../models/schedule';

export const getSchedules = async (_req: Request, res: Response) => {
    try {
        const schedules = await Schedule.findAll();
        res.json(schedules);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const createSchedule = async (req: Request, res: Response) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(201).json(schedule);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};