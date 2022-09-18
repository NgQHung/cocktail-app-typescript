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

export default router;
