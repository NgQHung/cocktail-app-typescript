import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cocktail } from "../App";
import Cocktails from "../components/Cocktails/Cocktails";

const NonAlcoholic = () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [index, setIndex] = useState(20);

    const fetchCocktal = async () => {
        const res = await axios.get(
            "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );
        const data = res.data.drinks;
        setCocktails(data.slice(0, index));
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
        <div>
            <Cocktails cocktailData={cocktails} loadMore={loadMore} />
        </div>
    );
};

export default NonAlcoholic;
