import mongoose from "mongoose";
import express, { Request, Response } from "express";
import Cocktail from "../models/cocktailModel";
import Alcoholic from "../models/alcoholicModel";
import NonAlcoholic from "../models/nonAlcoholicModel";
import Champagne from "../models/champagneFluteModel";
import Gin from "../models/ginModel";
import OrdinaryDrink from "../models/ordinaryDrinkModel";
import Vodka from "../models/vodkaModel";
import CocktailGlass from "../models/cocktailGlassModel";

import axios from "axios";
// import axios from "axios";

// alcoholic
export const alcoholic = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await Alcoholic.create(data);
    res.json({ data: data });
};

// nonAlcoholic
export const nonAlcoholic = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await NonAlcoholic.create(data);
    res.json({ data: data });
};

// ordinary drink
export const ordinaryDrink = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await OrdinaryDrink.create(data);
    res.json({ data: data });
};

// cocktail
export const cocktail = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await Cocktail.create(data);
    res.json({ data: data });
};

// cocktail glass
export const cocktailGlass = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await CocktailGlass.create(data);
    res.json({ data: data });
};

// champagne flute
export const champagneFlute = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await Champagne.create(data);
    res.json({ data: data });
};

// gin
export const gin = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await Gin.create(data);
    res.json({ data: data });
};

// vodka
export const vodka = async (req: Request, res: Response) => {
    let data;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await Vodka.create(data);
    res.json({ data: data });
};
