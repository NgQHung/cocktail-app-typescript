import express from "express";
import {
    addedCocktail,
    createCocktail,
    deleteCocktail,
    editCocktail,
    updateCocktail,
    // createIngredient,
    viewDetailCocktail,
} from "../controllers/cocktailsActionsController";

const router = express.Router();

router.post("/create-cocktail", createCocktail);
// router.post("/create-ingredient", createIngredient);

// get all added cocktails
router.get("/added-cocktails", addedCocktail);

// view cocktail detail
router.get("/added-cocktails/:slug", viewDetailCocktail);

// edit cocktail
router.get("/:id/edit", editCocktail);
router.put("/:id/update", updateCocktail);

// delete cocktail
router.delete("/:id/delete", deleteCocktail);

// show all stored cocktails
router.get("/stored/cocktails");

// show all stored deleted cocktails
router.get("/trash/cocktails");

export default router;
