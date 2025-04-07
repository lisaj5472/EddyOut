import express from 'express';
import { getMeals, createMeal } from '../../controllers/mealController';
const router = express.Router();
router.get('/', getMeals);
router.post('/', createMeal);
export { router as mealRouter };