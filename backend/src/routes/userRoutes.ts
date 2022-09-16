import express, { Response, Request, NextFunction } from "express";
import { shoppingCart } from "../controllers/cartController";
// import { shoppingCart } from "../controllers/cartController";
import { loginUser, signupUser } from "../controllers/userController";
import requireAuth from "../middleware/requireAuth";
import User from "../models/userModel";

const router = express.Router();

// router.use(requireAuth)

router.post("/signup", signupUser);
router.post("/login", loginUser);

// add cocktail to shopping cart
router.post("/users/:id/shopping-cart", shoppingCart);

export default router;
