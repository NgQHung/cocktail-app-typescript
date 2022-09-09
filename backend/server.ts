const express = require("express");
const routes = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const mongoose = require("mongoose");

// dotenv.config();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;
const URI: string = process.env.MONGO_URI!;

// middleware
app.use(express.json());

// routes
app.use("/api/cocktail", routes);
app.use((req, res, next) => {
    next();
});

mongoose
    .connect(URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("listening on port", PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
