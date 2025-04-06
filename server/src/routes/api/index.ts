import { Router } from "express";
import { crewRouter } from "./crew-routes";
import { gearItemRouter } from "./gearItem-routes";
import { gearListRouter } from "./gearList-routes";
import { mealRouter } from "./meal-routes";
import { scheduleRouter } from "./schedule-routes";
import { tripRouter } from "./trip-routes";
import { userRouter } from "./user-routes";


const router = Router();

router.use("/crew", crewRouter);
router.use("/gear", gearListRouter);
router.use("/meals", mealRouter);
router.use("/trips", tripRouter);
router.use("/users", userRouter);

export default router;
