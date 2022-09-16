import express from "express";
import dataRoutes from "./src/routes/dataRoutes";
import mongoose from "mongoose";
var cors = require("cors");
import userRoutes from "./src/routes/userRoutes";
import searchRoutes from "./src/routes/searchRoutes";
import cocktailsActionsRoutes from "./src/routes/cocktailActionsRoutes";
import dotenv from "dotenv";
// import userRoutes from "./routes/userRoutes";

dotenv.config();
// const mongoose = require("mongoose");

// dotenv.config();

const app = express();
app.use(cors());

// PORT
const PORT = process.env.PORT || 4000;

/** Parse the body - middleware */
app.use(express.json());

// routes
app.use("/api/cocktails", dataRoutes);
app.use("/api/my-cocktail", cocktailsActionsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/search", searchRoutes);
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    next();
});

mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
        app.listen(PORT, () => {
            console.log("listening on port and mongoose is connected", PORT);
        });
    })
    .catch((err: any) => {
        console.log(err);
    });
