import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { ClickedCocktail, Cocktail } from "../models/cocktails";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft,
    faUtensils,
    faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { useDispatch } from "react-redux";

interface Props {
    cocktailData: Cocktail[];
    // cocktailEntered: (idName?: string) => void;
}

const CocktailDetail: React.FC<Props> = (props) => {
    const params = useParams();
    const [my_swiper, set_my_swiper] = useState<any>({});
    const [hasError, setHasError] = useState();
    const dispatch = useDispatch();
    const location = useLocation();
    // console.log(location.pathname);
    const clickedCoc: any = useSelector<any>((state) => state.cocktailSlice.clickedCocktail);
    // console.log(clickedCoc);
    const idName = params.cocktailId?.split(" ").join("%");
    const idName2 = params.cocktailId?.split(" ").join("%20");
    // console.log(idName);

    const swiperHandlerR = (e: any) => {
        e.preventDefault();
        my_swiper.slideNext();
    };
    const swiperHandlerL = (e: any) => {
        e.preventDefault();
        my_swiper.slidePrev();
    };
    const enteredCocktail = async (idName?: string) => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${idName}`
        );
        // console.log(res.data.drinks);

        setHasError(res.data.drinks);
        dispatch(cocktailSliceAction.clickedCocktailHandler(res.data.drinks));
    };
    useEffect(() => {
        enteredCocktail(idName);
    }, []);
    useEffect(() => {
        if (location.pathname === `/cocktail/${idName2}`) {
            dispatch(cocktailSliceAction.navigationHandler(false));
        }
    }, [location.pathname]);
    // console.log(hasError === null);
    // console.log(`/cocktail/${idName}`);
    // console.log(location.pathname === `/cocktail/${idName2}`);

    return (
        <div className="detail">
            {clickedCoc?.map((item: ClickedCocktail) => (
                <div className="" key={item?.idDrink}>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex justify-around flex-wrap">
                            <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden flex justify-center">
                                <img
                                    alt="feature"
                                    className="object-cover object-center h-full w-96"
                                    src={item?.strDrinkThumb}
                                />
                            </div>
                            <div className="lg:w-1/2 w-full justify-center items-center overflow-hidden">
                                <Swiper
                                    slidesPerView={1}
                                    // spaceBetween={50}
                                    onInit={(ev) => {
                                        set_my_swiper(ev);
                                    }}
                                    className="flex flex-row"
                                >
                                    {/* <div className="flex flex-row"> */}
                                    <SwiperSlide>
                                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-full lg:p-12 lg:text-left text-center">
                                            <div className="flex flex-col justify-center mb-10  items-center">
                                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                                    <FontAwesomeIcon icon={faBowlFood} />
                                                </div>
                                                <div className="flex-grow">
                                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                                        INGREDIENTS
                                                    </h2>
                                                    <ul className="ingredient leading-relaxed text-base">
                                                        <li
                                                            className={
                                                                item.strIngredient1
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure1 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure1
                                                                    ? item.strMeasure1
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient1}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient2
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure2 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure2
                                                                    ? item.strMeasure2
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient2}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient3
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure3 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure3
                                                                    ? item.strMeasure3
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient3}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient4
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure4 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure4
                                                                    ? item.strMeasure4
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient4}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient5
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure5 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure5
                                                                    ? item.strMeasure5
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient5}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient6
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure6 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure6
                                                                    ? item.strMeasure6
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient6}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient7
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure7 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure7
                                                                    ? item.strMeasure7
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient7}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient8
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure8 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure8
                                                                    ? item.strMeasure8
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient8}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient9
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p
                                                            // className={
                                                            //     item.strMeasure9 ? "" : "hidden"
                                                            // }
                                                            >
                                                                {item.strMeasure9
                                                                    ? item.strMeasure9
                                                                    : "1"}
                                                            </p>
                                                            <a>{item.strIngredient9}</a>
                                                        </li>
                                                    </ul>
                                                    <div
                                                        className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer"
                                                        onClick={swiperHandlerR}
                                                    >
                                                        How To Mix
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-full lg:p-12 lg:text-left text-center">
                                            <div className="flex flex-col justify-center mb-10 items-center h-full">
                                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 ">
                                                    <FontAwesomeIcon icon={faUtensils} />
                                                </div>
                                            </div>
                                            <div className="flex-grow text-center">
                                                <h2 className="text-gray-900  text-lg title-font font-medium mb-3">
                                                    INSTRUCTIONS
                                                </h2>
                                                <p className="leading-relaxed text-base ">
                                                    {item.strInstructions}
                                                </p>
                                                <Link
                                                    to=""
                                                    className="my-4 text-indigo-500 inline-flex items-center"
                                                    onClick={swiperHandlerL}
                                                >
                                                    <FontAwesomeIcon icon={faArrowLeft} />
                                                    Ingredient
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* </div> */}
                                </Swiper>
                            </div>
                        </div>
                    </section>

                    {/* <div className=" top-0 left-0">

                        <div>
                            <p>{item.strAlcoholic}</p>
                            <p>{item.strCategory}</p>
                        </div>
                    </div> */}
                </div>
            ))}
            {clickedCoc === null && hasError === null ? (
                <p className="text-center">
                    Cocktail <span className="font-bold">{params.cocktailId}</span> has no
                    information
                </p>
            ) : null}
        </div>
    );
};

export default CocktailDetail;
