import { Request, Response } from 'express';
import { Crew } from '../models/crew';

export const getAllCrew = async (_req: Request, res: Response) => {
    try {
        const crew = await Crew.findAll();
        res.json(crew);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const createCrew = async (req: Request, res: Response) => {
    try {
        const crew = await Crew.create(req.body);
        res.status(201).json(crew);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};
