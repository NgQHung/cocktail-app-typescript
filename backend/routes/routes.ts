import express from "express";
import { Router } from "express";
import { alcoholic, getAllCocktail, nonAlcoholic } from "../controllers/cocktailController";
import { Request, Response, NextFunction } from "express";

const router = Router();

// router.get("/", getAllCocktail);
router.get("/hi", (req: Request, res: Response) => {
    res.json({ message: "hello world" });
});

router.get("/category", (req: Request, res: Response) => {
    res.json("ordinary-drink");
});
// // category
// router.get("/category/ordinary-drink", (req: express.Request, res: express.Response) => {
//     res.json("ordinary-drink");
// });
// router.get("/category/cocktail", (req: express.Request, res: express.Response) => {
//     res.json("cocktail");
// });

// // glass
// router.get("/glass/cocktail-glass", (req: express.Request, res: express.Response) => {
//     res.json("cocktail-glass");
// });
// router.get("/glass/champagne-flute", (req: express.Request, res: express.Response) => {
//     res.json("champagne-flute");
// });

// // ingredient
// router.get("/ingredient/gin");
// router.get("/ingredient/vodka");

// // alcoholic
// router.get("/alcoholic/alcoholic", alcoholic);
// router.get("/alcoholic/non-alcoholic", nonAlcoholic);

export default router;
