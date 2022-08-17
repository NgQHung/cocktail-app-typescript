import express from "express";
import router from "./routes/routes";
import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;
const URI: string = process.env.MONGO_URI!;

// middleware
app.use(express.json());

app.use((req, res, next) => {
    next();
});

// routes
app.use("/api", router);

mongoose
    .connect(
        // "mongodb+srv://HungNguyenQuang:123@cluster0.ysrvy.mongodb.net/?retryWrites=true&w=majority"
        URI
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log("listening on port", PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
