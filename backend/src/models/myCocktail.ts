import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MyCocktailSchema = new Schema(
    {
        name: {
            type: String,
        },
        type: {
            type: String,
        },
        price: {
            type: Number,
        },
        addressImage: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("My Cocktail", MyCocktailSchema);
