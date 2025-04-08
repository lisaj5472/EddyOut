import express, { type RequestHandler } from "express";
import { Request,  Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login:RequestHandler = async (req: Request, res: Response, next) => {
  try {
    const { username, password } = req.body;
  
    const user = await User.findOne({
      where: { username },
    });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
  
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }
  
    const secretKey = process.env.JWT_SECRET_KEY || "";
  
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: "1h" });
    return res.json({ token });

  } catch (error) {
    next(error)
  }
};

const router = express.Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
