import express from 'express';
import { getAllGearItems, createGearItem } from '../../controllers/gearItemController';
const router = express.Router();
router.get('/', getAllGearItems);
router.post('/', createGearItem);
export { router as gearItemRouter };