import express from "express";
import { Router } from "express";
import { getAllCocktail } from "../controllers/cocktailController";

const router = Router();

router.get("/", getAllCocktail);
router.get("/navigation", (req: express.Request, res: express.Response) => {
    res.json("navigation");
});
router.get("/category/type", (req: express.Request, res: express.Response) => {
    res.json("category");
});
router.get("/collection/:id", (req: express.Request, res: express.Response) => {
    res.json("collection");
});
router.get("/cocktail/:id", (req: express.Request, res: express.Response) => {
    res.json("cocktails");
});

export default router;
