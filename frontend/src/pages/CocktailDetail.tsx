import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ClickedCocktail, Cocktail } from "../models/cocktails";

interface Props {
    cocktailData: Cocktail[];
    cocktailEntered: (idName?: string) => void;
}

const CocktailDetail: React.FC<Props> = (props) => {
    const params = useParams();
    const isID = props.cocktailData.filter((item) => item.idDrink.toString() === params.cocktailId);
    const clickedCoc: any = useSelector<any>((state) => state.cocktailSlice.clickedCocktail);
    const idName = params.cocktailId?.split(" ").join("%");
    useEffect(() => {
        props.cocktailEntered(idName);
    }, [idName]);
    console.log(clickedCoc);

    return (
        <div className="p-5">
            {clickedCoc.map((item: ClickedCocktail) => (
                <div className="" key={item.idDrink}>
                    <div className="">
                        <img className="" src={item.strDrinkThumb} alt={clickedCoc?.name} />

                        <h1>{item.strDrink}</h1>
                        <div>
                            <p>{item.strAlcoholic}</p>
                            <p>{item.strCategory}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <h2>Ingredient</h2>
                            <ul className="">
                                <li>{item.strIngredient1}</li>
                                <li>{item.strIngredient2}</li>
                                <li>{item.strIngredient3}</li>
                                <li>{item.strIngredient4}</li>
                                <li>{item.strIngredient5}</li>
                                <li>{item.strIngredient6}</li>
                                <li>{item.strIngredient7}</li>
                                <li>{item.strIngredient8}</li>
                                <li>{item.strIngredient9}</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Measure</h2>
                            <ul>
                                <li>{item.strMeasure1}</li>
                                <li>{item.strMeasure2}</li>
                                <li>{item.strMeasure3}</li>
                                <li>{item.strMeasure4}</li>
                                <li>{item.strMeasure5}</li>
                                <li>{item.strMeasure6}</li>
                                <li>{item.strMeasure7}</li>
                                <li>{item.strMeasure8}</li>
                                <li>{item.strMeasure9}</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Instructions</h2>
                            <p className=" ">{item.strInstructions}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CocktailDetail;
