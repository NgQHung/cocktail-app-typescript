import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { ClickedCocktail, Cocktail } from "../models/cocktails";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
    cocktailData: Cocktail[];
    cocktailEntered: (idName?: string) => void;
}

const CocktailDetail: React.FC<Props> = (props) => {
    const params = useParams();
    const swiper = useSwiper();
    const [my_swiper, set_my_swiper] = useState<any>({});
    // console.log(my_swiper.slideNext);
    // const location = useLocation();
    // const isID = props.cocktailData.filter((item) => item.idDrink.toString() === params.cocktailId);
    const clickedCoc: any = useSelector<any>((state) => state.cocktailSlice.clickedCocktail);
    const idName = params.cocktailId?.split(" ").join("%");
    useEffect(() => {
        props.cocktailEntered(idName);
    }, [idName]);
    // console.log(params);

    const swiperHandlerR = (e: any) => {
        e.preventDefault();
        my_swiper.slideNext();
    };
    const swiperHandlerL = (e: any) => {
        e.preventDefault();
        my_swiper.slidePrev();
    };

    return (
        <div className="detail">
            {clickedCoc?.map((item: ClickedCocktail) => (
                <div className="" key={item?.idDrink}>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex justify-around flex-wrap">
                            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                                <img
                                    alt="feature"
                                    className="object-cover object-center h-full w-full"
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
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        className="w-6 h-6"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <div className=" flex-grow">
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
                                                            <p>{item.strMeasure1}</p>
                                                            <a>{item.strIngredient1}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient2
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure2}</p>
                                                            <a>{item.strIngredient2}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient3
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure3}</p>
                                                            <a>{item.strIngredient3}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient4
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure4}</p>
                                                            <a>{item.strIngredient4}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient5
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure5}</p>
                                                            <a>{item.strIngredient5}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient6
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure6}</p>
                                                            <a>{item.strIngredient6}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient7
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure7}</p>
                                                            <a>{item.strIngredient7}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient8
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure8}</p>
                                                            <a>{item.strIngredient8}</a>
                                                        </li>
                                                        <li
                                                            className={
                                                                item.strIngredient9
                                                                    ? "flex flex-row"
                                                                    : "hidden"
                                                            }
                                                        >
                                                            <p>{item.strMeasure9}</p>
                                                            <a>{item.strIngredient9}</a>
                                                        </li>
                                                    </ul>
                                                    <Link
                                                        to=""
                                                        className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer"
                                                        onClick={swiperHandlerR}
                                                    >
                                                        How To Mix
                                                        <FontAwesomeIcon icon={faArrowRight} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-full lg:p-12 mx-20 lg:text-left text-center">
                                            <div className="flex flex-col justify-center mb-10 items-center h-full">
                                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
                                            </div>
                                            <div className="flex-grow">
                                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                                    INSTRUCTIONS
                                                </h2>
                                                <p className="leading-relaxed text-base">
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
                        <img
                            className="w-48 h-auto"
                            src={item.strDrinkThumb}
                            alt={clickedCoc?.name}
                        />

                        <h1>{item.strDrink}</h1>
                        <div>
                            <p>{item.strAlcoholic}</p>
                            <p>{item.strCategory}</p>
                        </div>
                    </div>
                    <div className="relative left-1/2 top-12">
                        <div className="">
                            <h2 className="">Ingredient</h2>
                            
                        </div>
                        <div>
                            <h2>Instructions</h2>
                            <p className=" ">{item.strInstructions}</p>
                        </div>
                    </div> */}
                </div>
            ))}
            {clickedCoc === null && (
                <p className="text-center">
                    Cocktail <span className="font-bold">{params.cocktailId}</span> has no
                    information
                </p>
            )}
        </div>
    );
};

export default CocktailDetail;
