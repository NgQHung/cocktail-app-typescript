import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ClickedCocktail } from "../models/cocktails";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft,
    // faUtensils,
    // faBowlFood,
    faMartiniGlass,
} from "@fortawesome/free-solid-svg-icons";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { useDispatch } from "react-redux";
import { notificationSliceActions } from "../store/notification-slice";
import { useAppSelector } from "../store/hook";
// import { Alert } from "../UI/Alert";

const CocktailDetail: React.FC = () => {
    const params = useParams();
    const [my_swiper, set_my_swiper] = useState<any>({});
    const [hasError, setHasError] = useState();
    const dispatch = useDispatch();
    // const location = useLocation();
    // const params = useParams();
    const urlName = params?.cocktailId?.split(" ").join("%");

    const [amount, setAmount] = React.useState(1);

    const cocktailBasket = useAppSelector((state) => state.cocktailSlice.cocktailsBasket);
    // console.log(cocktailBasket);
    const cocktailSelected: any = useSelector<any>((state) => state.cocktailSlice.cocktailSelected);
    // const alertContent = useAppSelector((state) => state.notificationSlice.alertContent);

    const addAmount = () => {
        setAmount((prev) => prev + 1);
    };
    const minusAmount = () => {
        setAmount((prev) => prev - 1);
    };

    const swiperHandlerR = (e: any) => {
        e.preventDefault();
        my_swiper.slideNext();
    };
    const swiperHandlerL = (e: any) => {
        e.preventDefault();
        my_swiper.slidePrev();
    };
    useEffect(() => {
        const dataAfterRefreshPage = async () => {
            const res = await axios.get(
                `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${urlName}`
            );
            dispatch(cocktailSliceAction.viewCocktailHandler(res.data.drinks));
        };
        if (performance.navigation.type === 1) {
            dataAfterRefreshPage();
        }
    }, []);

    const addToCartHandler = (item: any) => {
        const { id, name, image } = item;

        dispatch(
            cocktailSliceAction.addCocktail({
                id: id,
                name: name,
                image: image,
                price: 273,
                amount: amount,
                totalPrice: 0,
            })
        );
        if (cocktailBasket) {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Well done!",
                    description: "Cocktail is added successfully",
                    type: "success",
                    about: "addCocktail",
                })
            );
        } else {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Error!",
                    description: "Something went wrong, cocktail failed to add",
                    type: "error",
                    about: "addCocktail",
                })
            );
        }
    };

    return (
        <React.Fragment>
            {/* <div className="fixed z-50">{alertContent && <Alert />}</div> */}
            <div className="detail">
                {cocktailSelected?.map((item: ClickedCocktail, inx: number) => (
                    <div
                        key={inx}
                        className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 "
                    >
                        <div className="flex relative justify-center items-center lg:flex-row flex-col gap-8">
                            {/* <!-- Description Div --> */}
                            <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                                <div className="">
                                    <div className="absolute flex left-0 top-0 p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
                                        <Link to="/">Home</Link> / Cocktail /
                                        <p className="font-bold text-gray-700">{item?.strDrink}</p>
                                    </div>
                                    <div className="w-full lg:w-8/12 flex justify-center items-center mt-12">
                                        <img
                                            className="mt-4"
                                            src={item?.strDrinkThumb}
                                            alt={item?.strDrink}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                                <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">
                                    {item.strDrink}
                                </h2>

                                <div className=" w-[400px] justify-center items-center overflow-hidden my-8">
                                    <Swiper
                                        slidesPerView={1}
                                        // spaceBetween={50}
                                        onInit={(ev) => {
                                            set_my_swiper(ev);
                                        }}
                                        className="flex flex-row"
                                    >
                                        <SwiperSlide className="">
                                            <div className="flex flex-col flex-wrap -mb-10 lg:w-full lg:text-left text-center w-[300px]">
                                                <div className="flex flex-col mb-10 ">
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
                                                                <p>
                                                                    {item.strMeasure1
                                                                        ? item.strMeasure1
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient1}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient2
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure2
                                                                        ? item.strMeasure2
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient2}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient3
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure3
                                                                        ? item.strMeasure3
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient3}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient4
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure4
                                                                        ? item.strMeasure4
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient4}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient5
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure5
                                                                        ? item.strMeasure5
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient5}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient6
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure6
                                                                        ? item.strMeasure6
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient6}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient7
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure7
                                                                        ? item.strMeasure7
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient7}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient8
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure8
                                                                        ? item.strMeasure8
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient8}</p>
                                                            </li>
                                                            <li
                                                                className={
                                                                    item.strIngredient9
                                                                        ? "flex flex-row"
                                                                        : "hidden"
                                                                }
                                                            >
                                                                <p>
                                                                    {item.strMeasure9
                                                                        ? item.strMeasure9
                                                                        : "1"}
                                                                </p>
                                                                <p>{item.strIngredient9}</p>
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
                                            <div className="flex flex-col flex-wrap -mb-10 lg:w-full  lg:text-left ">
                                                <div className="flex-grow ">
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
                                    </Swiper>
                                </div>
                                <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                                    $ 790.89
                                </p>

                                <div className="lg:mt-11 mt-10">
                                    <div className="flex flex-row justify-between">
                                        <p className=" font-medium text-base leading-4 text-gray-600">
                                            Select quantity
                                        </p>
                                        <div className="flex">
                                            <span
                                                onClick={minusAmount}
                                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                                            >
                                                -
                                            </span>
                                            <input
                                                id="Amounter"
                                                aria-label="input"
                                                className="border border-gray-300 h-full text-center w-14 pb-1"
                                                type="text"
                                                value={amount}
                                                onChange={(e) => e.target.value}
                                            />
                                            <span
                                                onClick={addAmount}
                                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                                            >
                                                +
                                            </span>
                                        </div>
                                    </div>
                                    <hr className=" bg-gray-200 w-full my-2" />
                                    <div className=" flex flex-row justify-between items-center mt-4">
                                        <p className="font-medium text-base leading-4 text-gray-600">
                                            Dimensions
                                        </p>
                                        <svg
                                            // onClick={() => setRotate(!rotate)}
                                            id="rotateSVG"
                                            className={
                                                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform "
                                                // (rotate ? "rotate-180" : "rotate-0")
                                            }
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 1L5 5L1 1"
                                                stroke="#4B5563"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <hr className=" bg-gray-200 w-full mt-4" />
                                </div>

                                <button
                                    onClick={() =>
                                        addToCartHandler({
                                            id: item.idDrink,
                                            name: item.strDrink,
                                            image: item.strDrinkThumb,
                                        })
                                    }
                                    className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
                                >
                                    Add to shopping bag
                                </button>
                            </div>

                            {/* <!-- Preview Images Div For larger Screen--> */}
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <div className="w-full sm:w-96 md:w-8/12 lg:w-full sm:mt-14 mt-10">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={faMartiniGlass} />
                                    <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">
                                        Great for drinks
                                    </p>
                                    <p className="text-normal text-base leading-6 text-gray-600 mt-4">
                                        Here are all the great cocktail recipes you should know how
                                        to make, from the margarita to the whiskey sour. Cheers!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {cocktailSelected === null && hasError === null ? (
                    <div className="text-center">
                        Cocktail <span className="font-bold">{params.cocktailId}</span> has no
                        information
                    </div>
                ) : null}
            </div>
        </React.Fragment>
    );
};

export default CocktailDetail;
