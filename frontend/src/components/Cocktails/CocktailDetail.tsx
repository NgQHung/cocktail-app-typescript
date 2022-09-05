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
    const clickedCoc: any = useSelector<ClickedCocktail>(
        (state) => state.cocktailSlice.clickedCocktail
    );

    return (
        <div className="flex flex-col justify-center items-center p-5">
            {typeof clickedCoc === "object" && (
                <img className="w-48 h-auto" src={clickedCoc?.image} alt={clickedCoc?.name} />
            )}

            <h1>{isID && `This Cocktail at #${params.cocktailId}`}</h1>
        </div>
    );
};

export default CocktailDetail;
