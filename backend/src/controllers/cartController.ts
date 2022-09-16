import express from "express";
import User from "../models/userModel";

export const shoppingCart = async (req: express.Request, res: express.Response) => {
    const { id, data } = req.body;
    const user = await User.findOne({ id });
    // if (user) {
    //     res.json(data);
    // }
    res.json(id);
};
