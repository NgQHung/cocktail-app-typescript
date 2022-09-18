import axios from "axios";
import express, { Request, Response } from "express";

export const searchDataByName = async (req: Request, res: Response) => {
    let data;
    // const name = "ace";
    const { name } = req.body;
    const sendRequest = async () => {
        const request = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await searchedCocktail.create(data);
    res.json(data);
    // res.json(name);
};

export const searchDataByFirstLetter = async (req: Request, res: Response) => {
    let data;
    // const name = "ace";
    const { name } = req.body;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + name
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await searchedCocktail.create(data);

    res.json(data);
};

export const searchIngredientById = async (req: Request, res: Response) => {
    let data;
    // const name = "ace";
    const { name } = req.body;
    const sendRequest = async () => {
        const request = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + name
        );
        data = request.data.drinks;
    };
    try {
        const data = await sendRequest();
    } catch (error: any) {
        throw Error(error);
    }
    // await searchedCocktail.create(data);

    res.json(data);
};
