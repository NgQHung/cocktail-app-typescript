import CocktailModel from "../models/models";
import mongoose from "mongoose";
import express from "express";
// import axios from "axios";

// get all cocktail
export const getAllCocktail = async (req: express.Request, res: express.Response) => {
    res.json("getall cocktail");
};
