import React from "react";
import { Cocktail } from "../models/cocktails";

interface Props {
    cocktailData: Cocktail[];
}

const CocktailDetail: React.FC<Props> = (props) => {
    return (
        <div>
            CocktailDetail
            {/* {props.cocktailData.map((name) => (
                <p>{name}</p>
            ))} */}
        </div>
    );
};

export default CocktailDetail;
