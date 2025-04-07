// --- routes/crewRoutes.ts ---
import express from 'express';
import { getAllCrew, createCrew } from '../../controllers/crewController';
const router = express.Router();
router.get('/', getAllCrew);
router.post('/', createCrew);
export { router as crewRouter };
