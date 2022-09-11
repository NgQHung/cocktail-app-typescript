import express, { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import validator from "validator";
import bcrypt from "bcrypt";

const createToken = (_id: string) => {
    return jwt.sign({ _id }, process.env.SECRET as string, { expiresIn: "36000" });
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    let errors;
    const user = await User.findOne({ email });
    // res.json({ user: user.password });
    try {
        const match = user && user.password ? await bcrypt.compare(password, user.password) : false;
        if (!match) {
            errors = "Incorrect password";
        }
        if (!user) {
            errors = "Incorrect email";
        }
        if (!email || !password) {
            errors = "All field must not be empty";
        }
        if (!user || errors) {
            return res.json({
                errors: [
                    {
                        msg: errors,
                    },
                ],
                data: null,
            });
        }
        // const user
        // const user = await User.login(email, password);
        // create token
        const token = createToken(user._id);
        return res.status(200).json({
            errors: [],
            data: {
                token,
                user: {
                    id: user._id,
                    email: user.email,
                },
            },
        });
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
};

export const signupUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // const user = await User.findOne({ email });
    // const {}
    let errors;
    try {
        if (!validator.isStrongPassword(password)) {
            errors = "Password is not strong enough";
        }
        if (!validator.isEmail(email)) {
            errors = "Email is not valid";
        }
        if (!email || !password) {
            errors = "All field must not be empty";
        }
        const exist = await User.findOne({ email });

        if (exist) {
            errors = "Email already in use";
        }
        if (exist || errors) {
            return res.json({
                errors: [
                    {
                        msg: errors,
                    },
                ],
                data: null,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ email, password: hashedPassword });
        if (user) {
            res.json({
                errors: [],
                data: {
                    user: {
                        id: user._id,
                        email: user.email,
                    },
                },
            });
        }
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }

    // const {email, password} = user
};
