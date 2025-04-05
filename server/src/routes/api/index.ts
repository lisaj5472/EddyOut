import { Router } from "express";
import { userRouter } from "./user-routes";
import { tripRouter } from "./trip-routes";

const router = Router();

router.use("/users", userRouter);
router.use("/trips", tripRouter);

export default router;
