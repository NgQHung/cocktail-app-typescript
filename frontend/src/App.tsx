import React, { useEffect, useState } from "react";
import axios from "axios";
import Cocktails from "./components/Cocktails/Cocktails";

export interface Cocktail {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
}

function App() {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [cocktailInitital, setCocktailInitial] = useState<Cocktail[]>([]);
    const [cocktailNext, setCocktailNext] = useState<Cocktail[]>([]);
    const [indexx, setIndexx] = useState(20);
    const [loading, setLoading] = useState(false);

    const fetchCocktal = async () => {
        setLoading(true);
        const res = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        );
        const data = res.data.drinks;
        setCocktailInitial(res.data.drinks.slice(0, indexx));
        setCocktailNext(res.data.drinks.slice(indexx, indexx + 20));
        // res.data.drinks.map((coc: Cocktail, index: number) => {
        //     if ((index = indexx)) {
        //         console.log(coc);
        //         return setCocktails((prev) => [...prev, coc]);
        //     }
        // });
        setLoading(false);
    };
    const loadMore = () => {
        // setIndexx((prev) => prev + 20);
        fetchCocktal();
    };
    console.log(cocktailInitital);
    console.log(cocktailNext);

    const nextCocktails = (a: number, b: number) => {
        return [a + 20, b + 20];
    };
    return (
        <div className="App bg-gray-100">
            <Cocktails cocktailData={cocktails} />

            <button onClick={loadMore}>Load more</button>
        </div>
    );
}

export default App;
