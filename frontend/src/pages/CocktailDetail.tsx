import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { ClickedCocktail, Cocktail } from "../models/cocktails";

interface Props {
    cocktailData: Cocktail[];
    cocktailEntered: (idName?: string) => void;
}

const CocktailDetail: React.FC<Props> = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log(location);
    // console.log(params);
    const isID = props.cocktailData.filter((item) => item.idDrink.toString() === params.cocktailId);
    const clickedCoc: any = useSelector<any>((state) => state.cocktailSlice.clickedCocktail);
    const idName = params.cocktailId?.split(" ").join("%");
    useEffect(() => {
        props.cocktailEntered(idName);
    }, [idName]);
    // console.log(clickedCoc);

    return (
        <div className="detail">
            {clickedCoc.map((item: ClickedCocktail) => (
                <div className="" key={item.idDrink}>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                                <img
                                    alt="feature"
                                    className="object-cover object-center h-full w-full"
                                    src={item.strDrinkThumb}
                                />
                            </div>
                            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                                <div className="flex flex-col justify-center mb-10  items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
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
                                        <p className="ingredient leading-relaxed text-base">
                                            <ul className=" ">
                                                <li>
                                                    <p>{item.strMeasure1}</p>
                                                    <a>{item.strIngredient1}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure2}</p>
                                                    <a>{item.strIngredient2}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure3}</p>
                                                    <a>{item.strIngredient3}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure4}</p>
                                                    <a>{item.strIngredient4}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure5}</p>
                                                    <a>{item.strIngredient5}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure6}</p>
                                                    <a>{item.strIngredient6}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure7}</p>
                                                    <a>{item.strIngredient7}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure8}</p>
                                                    <a>{item.strIngredient8}</a>
                                                </li>
                                                <li>
                                                    <p>{item.strMeasure9}</p>
                                                    <a>{item.strIngredient9}</a>
                                                </li>
                                            </ul>
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="6" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                            The Catalyzer
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Blue bottle crucifix vinyl post-ironic four dollar toast
                                            vegan taxidermy. Gastropub indxgo juice poutine.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                            Neptune
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Blue bottle crucifix vinyl post-ironic four dollar toast
                                            vegan taxidermy. Gastropub indxgo juice poutine.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div> */}
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
                            <h2>Measure</h2>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Instructions</h2>
                            <p className=" ">{item.strInstructions}</p>
                        </div>
                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default CocktailDetail;
