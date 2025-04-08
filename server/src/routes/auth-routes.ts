import express  from "express";
import { Request,  Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
  
    const user = await User.findOne({
      where: { username },
    });
    if (!user) {
      res.status(401).json({ message: "Authentication failed" });
      return
    }
  
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      res.status(401).json({ message: "Authentication failed" });
      return
    }
  
    const secretKey = process.env.JWT_SECRET_KEY || "";
  
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: "1h" });
    res.json({ token });

  } catch (error) {
    console.log('Error authenticating user', error)
  }
};

const router = express.Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
