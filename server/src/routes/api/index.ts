import { Router } from "express";
import { userRouter } from "./user-routes.js";
import { tripRouter } from "./trip-routes.js";

const router = Router();

router.use("/users", userRouter);
router.use("/trips", tripRouter);

export default router;
