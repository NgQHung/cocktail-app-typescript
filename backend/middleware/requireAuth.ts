import jwt from "jsonwebtoken";
import User from "../models/user";
import { Request, Response, NextFunction } from "express";

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authentication token required" });
    }

    const token = authorization.split(" ")[1];

    try {
        // const {_id} = jwt.verify(token, process.env.S)
    } catch (error) {}
};
