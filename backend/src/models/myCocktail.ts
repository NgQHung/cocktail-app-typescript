import mongoose from "mongoose";
import { softDeletePlugin, SoftDeleteModel } from "soft-delete-plugin-mongoose";

const Schema = mongoose.Schema;

interface MyCocktail extends mongoose.Document {
    name: string;
    type: string;
    price: string;
    addressImage: string;
}

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

MyCocktailSchema.plugin(softDeletePlugin);

// export default mongoose.model(, );
const model = mongoose.model<MyCocktail, SoftDeleteModel<MyCocktail>>(
    "My Cocktail",
    MyCocktailSchema
);

export default model;
