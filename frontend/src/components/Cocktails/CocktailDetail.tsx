import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Cocktail } from "../../models/cocktails";

interface Props {
    cocktailData: Cocktail[];
}
interface ClickedCocktail {
    id?: number;
    name?: string;
    image?: string;
    cocktailSlice: any;
}

const CocktailDetail: React.FC<Props> = (props) => {
    const params = useParams();
    const isID = props.cocktailData.filter((item) => item.idDrink.toString() === params.cocktailId);
    // props.cocktailData.filter((item) => console.log(item.idDrink.toString()));
    // const {idDrink, strDrink, strDrinkThumb}:Cocktail  = props.cocktailData.map((item) => console.log(item));

    // console.log(params.cocktailId);
    const clickedCoc: any = useSelector<ClickedCocktail>(
        (state) => state.cocktailSlice.clickedCocktail
    );

    return (
        <div className="flex justify-center items-center p-5">
            {typeof clickedCoc === "object" && (
                <img src={clickedCoc?.image} alt={clickedCoc?.name} />
            )}

            <h1>{isID && `This Cocktail at #${params.cocktailId}`}</h1>
        </div>
    );
};

export default CocktailDetail;
