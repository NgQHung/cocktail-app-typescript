import express from "express";
import routes from "./routes/routes";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
// import userRoutes from "./routes/userRoutes";

dotenv.config();
// const mongoose = require("mongoose");

// dotenv.config();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

// routes
app.use("/api/cocktails", routes);
app.use("/api/users", userRoutes);
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
