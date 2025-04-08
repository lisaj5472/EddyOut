import express from 'express';


import { getAllCrew, createCrew } from '../../controllers/crewControllers.js';

const router = express.Router();
router.get('/', getAllCrew);
router.post('/', createCrew);
export { router as crewRouter };
