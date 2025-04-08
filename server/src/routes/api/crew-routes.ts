// --- routes/crewRoutes.ts ---
import express from 'express';
import { getAllCrew, createCrew } from '../../controllers/crewControllers';
const router = express.Router();
router.get('/', getAllCrew);
router.post('/', createCrew);
export { router as crewRouter };
