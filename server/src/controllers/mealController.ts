import { Request, Response } from 'express';
import { Meal } from '../models/meals';

export const getMeals = async (_req: Request, res: Response) => {
    try {
        const meals = await Meal.findAll();
        res.json(meals);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const createMeal = async (req: Request, res: Response) => {
    try {
        const meal = await Meal.create(req.body);
        res.status(201).json(meal);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};