import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Cocktails from "./components/Cocktails/Cocktails";
import Header from "./Layouts/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Alcoholic from "./pages/Alcoholic";
import NonAlcoholic from "./pages/NonAlcoholic";
import { Cocktail } from "./models/cocktails";
import Navigation from "./pages/Navigation";
import CocktailItem from "./components/Cocktails/CocktailItem";
import CocktailDetail from "./components/CocktailDetail";

function App() {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [index, setIndex] = useState(20);
    const [loading, setLoading] = useState(false);
    // let index: number = 20;
    const location = useLocation();

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
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Cocktails cocktailData={cocktails} loadMore={loadMore} />}
                />
                <Route
                    path="/*"
                    element={<Cocktails cocktailData={cocktails} loadMore={loadMore} />}
                />
                {/* <Routes>
                    <Route path="*" element={<Navigation />} />
                </Routes> */}
                <Route path="/alcoholic" element={<Alcoholic />} />
                <Route path="/alcoholic/non-alcoholic" element={<NonAlcoholic />} />
                <Route
                    path={"/cocktail/:id"}
                    element={<CocktailDetail cocktailData={cocktails} />}
                />
            </Routes>
        </Fragment>
    );
}

export default App;
