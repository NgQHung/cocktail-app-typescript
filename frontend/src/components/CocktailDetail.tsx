import React from "react";
import { Cocktail } from "../models/cocktails";

interface Props {
    name: string;
}

const CocktailDetail: React.FC<Props> = (props) => {
    return (
        <div>
            <p>
                CocktailDetail
                {props.name}
            </p>
        </div>
    );
};

export default CocktailDetail;
