import React, { Fragment, useEffect } from "react";
import Header from "./Layouts/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Alcoholic from "./pages/Alcoholic";
import NonAlcoholic from "./pages/NonAlcoholic";
import Navigation from "./pages/Navigation";
import Searched from "./pages/Searched";
import NotFound from "./pages/NotFound";
import Search from "./components/Search/Search";
import Footer from "./Layouts/Footer";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { cocktailSliceAction } from "./store/cocktail-slice";
import CocktailDetail from "./pages/CocktailDetail";
import Signup from "./components/Form/Signup";
import Signin from "./components/Form/Signin";
import WishList from "./pages/WishList";
import Main from "./pages/Main";
import { dataSliceActions, fetchData } from "./store/slice-http";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { AppDispatch } from "./store";
import { UISliceActions } from "./store/ui-slice";
import Loading from "./UI/Loading";

// let isInitial = true;

function App() {
    const itemsSavedToLocalStorageCart: any = localStorage.getItem("Cart");
    const itemsSavedToLocalStorageHeart: any = localStorage.getItem("Heart");
    const user: any = localStorage.getItem("User");
    const dispatch = useDispatch<any>();
    const loadingState = useAppSelector((state) => state.UISlice.loading);
    const data = useAppSelector((state) => state.dataSlice?.data);
    const dataToShow = useAppSelector((state) => state.dataSlice?.dataToShow);
    const location = useLocation();
    // console.log(loadingState);

    // const fetchCocktal = async () => {
    //     setLoading(true);
    //     const res = await axios.get(
    //         "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
    //     );
    //     const data = res.data.drinks;
    //     setCocktails(data.slice(0, index));
    //     setLoading(false);
    // };

    // const loadMore = () => {
    //     setIndex((prev) => prev + 20);
    //     fetchCocktal();
    // };

    // useEffect(() => {
    //     setIndex((prev) => prev + 20);
    //     fetchCocktal();
    // }, []);
    useEffect(() => {
        // dispatch(UISliceActions.loadingHandler(true));
        try {
            const basket = JSON.parse(itemsSavedToLocalStorageCart);
            const heart = JSON.parse(itemsSavedToLocalStorageHeart);
            if (!user) {
                dispatch(cocktailSliceAction.localStorageHandler({ heart: heart, basket: basket }));
            } else {
                dispatch(cocktailSliceAction.localStorageHandler({ heart: [], basket: [] }));
                // window.location.reload(false);
            }
            dispatch(fetchData());
        } catch (error) {
            console.log(error);
        }
        // dispatch(UISliceActions.loadingHandler(false));
    }, []);

    // if (isInitial) {
    //     isInitial = false;
    //     return;
    // }
    // useEffect(() => {}, []);
    useEffect(() => {
        dispatch(UISliceActions.loadingHandler(true));
        if (data) {
            dispatch(dataSliceActions.getCocktailsToShow());
            // console.log("data");
        }

        dispatch(UISliceActions.loadingHandler(false));
    }, [data, dispatch]);

    return (
        <Fragment>
            <div className="absolute">{loadingState && <Loading />}</div>
            <div className="main flex flex-col justify-between">
                <Header />
                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route
                            path="/"
                            element={
                                <Main
                                    cocktailData={dataToShow}
                                    // loadMore={loadMore}
                                    // amountCocktail={index}
                                />
                            }
                        >
                            <Route path="navigation" element={<Navigation />} />
                            <Route path="signup" element={<Signup />} />
                            <Route path="signin" element={<Signin />} />
                        </Route>
                        <Route path="/search" element={<Search />} />
                        <Route path="alcoholic/non-alcoholic" element={<NonAlcoholic />} />
                        <Route path="alcoholic/alcoholic" element={<Alcoholic />} />
                        <Route path="/wish-list" element={<WishList />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/cocktail/:cocktailId" element={<CocktailDetail />} />
                        <Route path="/searched/:cocktail" element={<Searched />} />
                        <Route path="/searched/*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
                {/* <CocktailItem /> */}
                <Footer />
            </div>
        </Fragment>
    );
}

export default App;
