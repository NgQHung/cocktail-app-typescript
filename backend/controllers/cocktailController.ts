import CocktailModel from "../models/models";
import mongoose from "mongoose";
import express, { Request, Response } from "express";
import axios from "axios";
// import axios from "axios";

// get all cocktail
export const cocktails = async (req: Request, res: Response) => {
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
    res.json({ data: data });
};

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
    res.json({ data: data });
};
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
    res.json({ data: data });
};
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
    res.json({ data: data });
};
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
    res.json({ data: data });
};
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
    res.json({ data: data });
};
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
    res.json({ data: data });
};
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
    res.json({ data: data });
};
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
    res.json({ data: data });
};
