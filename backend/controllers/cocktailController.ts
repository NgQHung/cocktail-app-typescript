import CocktailModel from "../models/models";
import mongoose from "mongoose";
import express from "express";

// get all cocktail
export const getAllCocktail = (req: express.Request, res: express.Response) => {
    res.json("getall cocktail");
};
