import express from "express";
import {
    searchDataByFirstLetter,
    searchDataByName,
    searchIngredientById,
} from "../controllers/searchController";

const router = express.Router();
// method POST
router.post("/searchByName", searchDataByName);
router.post("/searchByFirstLetter", searchDataByFirstLetter);
router.post("/searchById", searchIngredientById);

// method GET data
// router.get("/searchByName/data", searchDataByName);
// router.get("/searchByFirstLetter/data", searchDataByFirstLetter);
// router.get("/searchById/data", searchIngredientById);
export default router;
