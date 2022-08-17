import mongoose from "mongoose";
import { cocktail } from "./baseModel";

const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    recipes: {
        type: String,
        required: true,
    },
});

const CocktailModel = mongoose.model<cocktail>("Cocktail", cocktailSchema);

export default CocktailModel;
