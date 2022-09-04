import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CocktailDetail from "../CocktailDetail";

interface Props {
    id: number;
    name: string;
    image: string;
}

const CocktailItem: React.FC<Props> = (props) => {
    const { name, image } = props;
    return (
        <div>
            <Routes>
                <Route path={"/cocktail/:name"} element={<CocktailDetail name={name} />} />
            </Routes>
            <Link to={`/cocktail/${name}`}>
                <div className="bg-white rounded-lg mt-12 shadow-lg overflow-hidden mr-6 cursor-pointer">
                    <img src={image} alt={name} className="w-64 h-32 sm:h-48 object-cover" />
                    <div className="p-3 font-bold text-sm">{name}</div>
                </div>
            </Link>
        </div>
    );
};

export default CocktailItem;
