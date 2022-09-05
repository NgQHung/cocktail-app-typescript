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
    // const navigationClicked: any = useSelector<any>(
    //     (state) => state.cocktailSlice.navigationClicked
    // );
    // console.log(navigationClicked);

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
