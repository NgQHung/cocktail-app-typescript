import React, { Fragment, useEffect } from "react";
import Header from "./Layouts/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Searched from "./pages/Searched";
import NotFound from "./pages/NotFound";
import CreateCocktail from "./components/Form/CreateCocktail";
import CreateIngredient from "./components/Form/CreateIngredient";
// import Footer from "./Layouts/Footer";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import CocktailDetail from "./pages/CocktailDetail";
import Signup from "./components/Form/Signup";
import Signin from "./components/Form/Signin";
import WishList from "./pages/WishList";
import Main from "./pages/Main";
import { dataSliceActions, fetchDataToShow } from "./store/slice-http";
import { useAppSelector } from "./store/hook";
// import { AppDispatch } from "./store";
import { UISliceActions } from "./store/ui-slice";
import Loading from "./UI/Loading";
import { notificationSliceActions } from "./store/notification-slice";
import { Alert } from "./UI/Alert";
import AddedCocktails from "./pages/my-cocktail/AddedCocktails";
import AddedCocktailsDetail from "./pages/my-cocktail/AddedCocktailsDetail";
import EditAddedCocktail from "./pages/my-cocktail/EditAddedCocktail";
import DeletedCocktails from "./pages/my-cocktail/DeletedCocktails";

// let isInitial = true;

function App() {
    // const itemsSavedToLocalStorageCart: any = localStorage.getItem("Cart");
    // const itemsSavedToLocalStorageHeart: any = localStorage.getItem("Heart");
    // const totalSavedToLocalStorage: any = localStorage.getItem("Total");
    // const userLocalStorage: any = localStorage.getItem("User");
    // const user = localStorage.getItem("User") !== null;
    const dispatch = useDispatch<any>();
    const loadingState = useAppSelector((state) => state.UISlice.loading);
    const data = useAppSelector((state) => state.dataSlice?.data);
    const dataToShow = useAppSelector((state) => state.dataSlice?.dataToShow);
    const alertContent = useAppSelector((state) => state.notificationSlice.alertContent);
    // const addedCocktails = useAppSelector((state) => state.cocktailSlice.addedCocktails);
    console.log("loadingState: ", loadingState);
    const location = useLocation();
    useEffect(() => {
        try {
            // const basket = JSON.parse(itemsSavedToLocalStorageCart);
            // const heart = JSON.parse(itemsSavedToLocalStorageHeart);
            // const total = JSON.parse(totalSavedToLocalStorage);
            // if (user) {
            // dispatch(
            //     cocktailSliceAction.localStorageHandler({
            //         heart: heart,
            //         basket: basket,
            //         total: total || 0,
            //     })
            // );
            // } else {
            // dispatch(cocktailSliceAction.localStorageHandler({ heart: [], basket: [] }));
            // window.location.reload();
            // }
            dispatch(fetchDataToShow());
        } catch (error) {
            console.log(error);
            dispatch(UISliceActions.loadingHandler(true));
            // dispatch(UISliceActions.loadingHandler(false));
        }
    }, []);

    // if (isInitial) {
    //     isInitial = false;
    //     return;
    // }
    useEffect(() => {
        if (data) {
            dispatch(dataSliceActions.getCocktailsToShow());
            // console.log("hello");
        }
    }, [data]);

    useEffect(() => {
        let time = setTimeout(() => dispatch(notificationSliceActions.alertHandler(null)), 1000);
        return () => {
            clearTimeout(time);
        };
    }, [alertContent, dispatch]);

    return (
        <div className="min-h-screen w-full">
            <div className="fixed top-[150px] left-[20px] z-50">{alertContent && <Alert />}</div>
            <div className="absolute">{loadingState && <Loading />}</div>
            {/* <div className="relative w-full h-full"> */}
            <Header />
            <AnimatePresence>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Main cocktailData={dataToShow} />}>
                        <Route path="navigation" element={<Navigation />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="signin" element={<Signin />} />
                    </Route>
                    <Route path="/wish-list" element={<WishList />} />
                    <Route path="/my-cocktail" element={<AddedCocktails />} />
                    <Route path="/my-cocktail/:id" element={<AddedCocktailsDetail />} />
                    <Route path="/my-cocktail/:id/edit" element={<EditAddedCocktail />} />
                    <Route path="/my-cocktail/trash/cocktails" element={<DeletedCocktails />} />
                    <Route path="/create-cocktail" element={<CreateCocktail />} />
                    <Route path="/create-ingredient" element={<CreateIngredient />} />
                    <Route path="/cocktail/:cocktailId" element={<CocktailDetail />} />
                    <Route path="/searched/:cocktail" element={<Searched />} />
                    <Route path="/searched/*" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
            {/* <CocktailItem /> */}
            {/* <Footer /> */}
            {/* </div> */}
        </div>
    );
}

export default App;
