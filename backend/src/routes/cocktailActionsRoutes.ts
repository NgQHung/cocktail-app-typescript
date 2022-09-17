import express from "express";
import {
    addedCocktail,
    createCocktail,
    deleteCocktail,
    editCocktail,
    forceDeletedCocktails,
    restoreDeletedCocktails,
    storeDeletedCocktails,
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

// soft delete cocktail
router.delete("/:id/delete", deleteCocktail);

// force delete cocktail
router.delete("/:id/force-delete", forceDeletedCocktails);

// show all stored cocktails
router.get("/stored/cocktails");

// show all stored deleted cocktails
router.get("/trash/cocktails", storeDeletedCocktails);
router.patch("/trash/:id/restore", restoreDeletedCocktails);

export default router;
