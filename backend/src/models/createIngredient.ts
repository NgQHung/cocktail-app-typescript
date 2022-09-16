import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CreateSchema = new Schema(
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

export default mongoose.model("Create Ingredient", CreateSchema);
