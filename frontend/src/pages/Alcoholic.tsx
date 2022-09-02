import axios from "axios";
import React, { useEffect, useState } from "react";
import Cocktails from "../components/Cocktails/Cocktails";
import { getAllCocktail } from "../store/slice-http";
import { Cocktail } from "../models/cocktails";
import { useDispatch, useSelector } from "react-redux";

const Alcoholic = () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const data = useSelector<any>((state) => state.cocktailSlice.data);
    // console.log(data);
    const [index, setIndex] = useState(20);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch<any>();

    const fetchCocktal = async () => {
        setLoading(true);
        // const res = await axios.get(
        //     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        // );
        // const data = res.data.drinks;
        dispatch(getAllCocktail());
        // console.log(data);
        // setCocktails(data.slice(0, index));
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
        <div>
            <Cocktails cocktailData={cocktails} loadMore={loadMore} />
        </div>
    );
};

export default Alcoholic;
