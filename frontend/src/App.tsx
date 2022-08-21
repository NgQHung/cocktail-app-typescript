import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Cocktails from "./components/Cocktails/Cocktails";
import Button from "./UI/Button";
import Header from "./Layouts/Header";
import { Route, Routes } from "react-router-dom";

export interface Cocktail {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
}

function App() {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [index, setIndex] = useState(20);
    const [loading, setLoading] = useState(false);
    // let index: number = 20;

    const fetchCocktal = async () => {
        setLoading(true);
        const res = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        );
        const data = res.data.drinks;
        setCocktails(data.slice(0, index));
        setLoading(false);
    };
    const loadMore = () => {
        setIndex((prev) => prev + 20);
        fetchCocktal();
    };

    useEffect(() => {
        setIndex((prev) => prev + 20);
        fetchCocktal();
    }, []);

    return (
        <Fragment>
            <Routes>
                <Route
                    path="/"
                    element={<Cocktails cocktailData={cocktails} loadMore={loadMore} />}
                />
            </Routes>
        </Fragment>
    );
}

export default App;
