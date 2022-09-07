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
import Searched from "./pages/Searched";
import NotFound from "./pages/NotFound";
import Search from "./components/Search/Search";
import Footer from "./Layouts/Footer";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { cocktailSliceAction } from "./store/cocktail-slice";
import CocktailDetail from "./pages/CocktailDetail";

function App() {
    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [index, setIndex] = useState(20);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
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

    const enteredCocktail = async (idName?: string) => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${idName}`
        );
        // console.log(res.data.drinks);
        dispatch(cocktailSliceAction.clickedCocktailHandler(res.data.drinks));
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
            <div className="main flex flex-col justify-between">
                <Header />
                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route
                            path="/"
                            element={<Cocktails cocktailData={cocktails} loadMore={loadMore} />}
                        >
                            <Route path="navigation" element={<Navigation />} />
                        </Route>
                        <Route path="search" element={<Search />} />
                        <Route path="alcoholic/non-alcoholic" element={<NonAlcoholic />} />
                        <Route path="alcoholic/alcoholic" element={<Alcoholic />} />
                        <Route path="*" element={<NotFound />} />
                        <Route
                            path="/cocktail/:cocktailId"
                            element={
                                <CocktailDetail
                                    cocktailEntered={enteredCocktail}
                                    cocktailData={cocktails}
                                />
                            }
                        />
                        <Route path="/searched/:cocktail" element={<Searched />} />
                        <Route path="/searched/*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </div>
        </Fragment>
    );
}

export default App;
