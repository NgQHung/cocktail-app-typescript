import React, { Fragment, useEffect } from "react";
import CocktailItem from "./CocktailItem";
import { ButtonLoadMore } from "../../UI/Button";
import { Cocktail } from "../../models/cocktails";
import { useLocation } from "react-router-dom";
import Signin from "../Form/Signin";
import Signup from "../Form/Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Alert } from "../../UI/Alert";
import { useDispatch } from "react-redux";
import { notificationSliceActions } from "../../store/notification-slice";
import Filter from "../Filter";
import { dataSliceActions } from "../../store/slice-http";
import { useAppSelector } from "../../store/hook";

interface Props {
    cocktailData?: Cocktail[];
    selectedType?: string;
}

const Cocktails: React.FC<Props> = (props) => {
    const error = props.cocktailData === null;
    const dataIsEmpty = props.cocktailData?.length === 0;
    const dispatch = useDispatch();

    const alertContent: any = useSelector<any>((state) => state.notificationSlice.alertContent);
    // console.log(alertContent);
    // const dataToShow = useAppSelector(state => state.dataSlice.dataToShow)
    const amountOfCocktail = useAppSelector((state) => state.dataSlice.indexEnd);

    const location = useLocation();
    const isSignin = location.pathname === "/signin";
    const isSignup = location.pathname === "/signup";
    const ingredient = props.selectedType === "ingredient_id";

    const loadMoreHandler = () => {
        dispatch(dataSliceActions.getMoreCocktails());
    };

    // useEffect(() => {
    //     let time = setTimeout(() => {
    //         dispatch(notificationSliceActions.alertHandler(null));
    //     }, 1000);
    //     return () => {
    //         clearTimeout(time);
    //     };
    // }, [dispatch]);
    return (
        <Fragment>
            <div className=" 2xl:container 2xl:mx-auto">
                {/* <div className="absolute">
                    {alertContent && location.pathname === "/" ? <Alert /> : null}
                </div> */}
                <div className=" py-6 lg:px-20 md:px-6 px-4">
                    <div className=" flex justify-between items-center">
                        <div className="relative dropdown_filter flex cursor-pointer">
                            <FontAwesomeIcon icon={faFilter} />
                            <p className=" ml-4 font-normal text-base leading-4 text-gray-800">
                                {/* <Alert /> */}
                                Filter
                            </p>
                            <div className="dropdown_filter_list">
                                <Filter />
                            </div>
                        </div>
                        <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
                            Showing {amountOfCocktail} products
                        </p>
                    </div>

                    <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                        {!ingredient &&
                            props.cocktailData?.map((coc) => (
                                <CocktailItem
                                    key={coc.idDrink}
                                    id={coc.idDrink}
                                    name={coc.strDrink}
                                    image={coc.strDrinkThumb}
                                />
                            ))}
                        {ingredient &&
                            props.cocktailData?.map((coc) => (
                                <CocktailItem
                                    key={coc.idDrink}
                                    id={coc.idIngredient}
                                    name={coc.strIngredient}
                                />
                            ))}
                        {error && <p>There are no such cocktail</p>}
                    </div>
                </div>

                <div
                    className={`${
                        !error && !dataIsEmpty ? "" : "hidden"
                    } flex justify-center mt-12 mb-12 cursor-pointer `}
                >
                    {/* need to fix more */}
                    {!error && !dataIsEmpty ? (
                        // <div className="border-2 rounded-xl p-2 hover:bg-red-300">
                        //     <Button clickHandler={props.loadMore}>Load more</Button>
                        // </div>
                        <div className=" flex justify-center items-center">
                            <ButtonLoadMore clickHandler={loadMoreHandler}>
                                Load More
                            </ButtonLoadMore>
                        </div>
                    ) : null}
                    {isSignin && !isSignup ? <Signin /> : null}
                    {!isSignin && isSignup ? <Signup /> : null}
                </div>
            </div>
        </Fragment>
    );
};

export default Cocktails;
