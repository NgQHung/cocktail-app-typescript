import React, { useEffect, useState } from "react";
import axios from "axios";
import Cocktails from "./components/Cocktails/Cocktails";
import Button from "./UI/Button";

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

    return (
        <div className="App bg-gray-100">
            <Cocktails cocktailData={cocktails} />

            <div className="flex justify-center ">
                <Button clickHandler={loadMore}>Load more</Button>
            </div>
        </div>
    );
}

export default App;
