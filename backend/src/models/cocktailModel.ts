import mongoose from "mongoose";
import { Cocktail } from "./baseModel";

const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
    idDrink: {
        type: String,
    },
    strDrink: {
        type: String,
    },
    strAlcoholic: {
        type: String,
    },
    strCategory: {
        type: String,
    },
    strDrinkThumb: {
        type: String,
    },
    strGlass: {
        type: String,
    },
    strIngredient1: {
        type: String,
    },
    strIngredient2: {
        type: String,
    },
    strIngredient3: {
        type: String,
    },
    strIngredient4: {
        type: String,
    },
    strIngredient5: {
        type: String,
    },
    strIngredient6: {
        type: String,
    },
    strIngredient7: {
        type: String,
    },
    strIngredient8: {
        type: String,
    },
    strIngredient9: {
        type: String,
    },
    strMeasure1: {
        type: String,
    },
    strMeasure2: {
        type: String,
    },
    strMeasure3: {
        type: String,
    },
    strMeasure4: {
        type: String,
    },
    strMeasure5: {
        type: String,
    },
    strMeasure6: {
        type: String,
    },
    strMeasure7: {
        type: String,
    },
    strMeasure8: {
        type: String,
    },
    strMeasure9: {
        type: String,
    },
    strInstructions: {
        type: String,
    },
});

const CocktailModel = mongoose.model<Cocktail>("Cocktail", CocktailSchema);

export default CocktailModel;
