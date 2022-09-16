// const express = require("express");
import express, { Request, Response, Router } from "express";
import {
    alcoholic,
    champagneFlute,
    cocktail,
    cocktailGlass,
    gin,
    nonAlcoholic,
    ordinaryDrink,
    vodka,
} from "../controllers/cocktailController";
const { getAllCocktail, cocktails } = require("../controllers/cocktailController");
// const { Request, Response, NextFunction } = require("express");

const router = Router();

// router.get("/", getAllCocktail);
// router.get("/cocktails", cocktails);

// // category
router.get("/category/ordinary-drink", ordinaryDrink);
router.get("/category/cocktail", cocktail);

// // glass
router.get("/glass/cocktail-glass", cocktailGlass);
router.get("/glass/champagne-flute", champagneFlute);

// // ingredient
router.get("/ingredient/gin", gin);
router.get("/ingredient/vodka", vodka);

// // alcoholic
router.get("/alcoholic/alcoholic", alcoholic);
router.get("/alcoholic/non-alcoholic", nonAlcoholic);

export default router;
