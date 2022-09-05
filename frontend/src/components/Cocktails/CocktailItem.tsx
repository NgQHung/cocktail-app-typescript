import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Cocktail } from "../../models/cocktails";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import CocktailDetail from "./CocktailDetail";

interface Props {
    id: number;
    name: string;
    image: string;
}

const CocktailItem: React.FC<Props> = (props) => {
    const { id, name, image } = props;

    const dispatch = useDispatch();
    const clickedCocktailHandler = () => {
        dispatch(cocktailSliceAction.clickedCocktailHandler({ id, name, image }));
    };
    return (
        <div>
            {/* <Routes>
                <Route path={"/cocktail/:name"} element={<CocktailDetail />} />
            </Routes> */}
            <Link to={`/cocktail/${id}`}>
                <div
                    onClick={clickedCocktailHandler}
                    className="bg-white rounded-lg mt-12 shadow-lg overflow-hidden mr-6 cursor-pointer"
                >
                    <img src={image} alt={name} className="w-64 h-32 sm:h-48 object-cover" />
                    <div className="p-3 font-bold text-sm">{name}</div>
                </div>
            </Link>
        </div>
    );
};

export default CocktailItem;
