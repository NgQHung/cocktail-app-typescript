import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";

interface Props {
    id: number;
    name: string;
    image?: string;
}

const CocktailItem: React.FC<Props> = (props) => {
    const { id, name, image } = props;

    const dispatch = useDispatch();
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );
    const clickedCocktailHandler = () => {
        // dispatch(cocktailSliceAction.clickedCocktailHandler({ id, name, image }));
        if (navigationClicked === true) return dispatch(cocktailSliceAction.navigationHandler());
        // dispatch(cocktailSliceAction.navigationHandler());
    };

    return (
        <Fragment>
            <div
                onClick={clickedCocktailHandler}
                className="flex flex-col justify-center items-center bg-white rounded-lg mt-12 shadow-lg overflow-hidden mx-6 cursor-pointer"
            >
                <Link to={`/cocktail/${name}`}>
                    <div className="flex flex-col items-center sm:w-48 sm:h-42">
                        {image && (
                            <img src={image} alt={name} className=" h-32 w-48 object-cover" />
                        )}
                        <p className="p-3 font-bold text-xs break-words flex flex-wrap">{name}</p>
                    </div>
                </Link>
            </div>
        </Fragment>
    );
};

export default CocktailItem;
