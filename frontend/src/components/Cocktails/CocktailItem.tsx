import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CocktailDetail from "../CocktailDetail";

interface Props {
    id: number;
    name: string;
    image: string;
}
interface Match {
    path: string;
    // exact: boolean;
    // strict: boolean
}

const CocktailItem: React.FC<Props> = (props) => {
    const { id, name, image } = props;
    const location = useLocation();
    // const match = matchPath<Match>(location.pathname, {
    //     path: "/users/:id",
    //     //   exact: true,
    //     //   strict: false
    // });
    // console.log(match);
    return (
        <div>
            <Link to={`/cocktail/${name}`}>
                <div className="bg-white rounded-lg mt-12 shadow-lg overflow-hidden mr-6 cursor-pointer">
                    <img src={image} alt={name} className="w-64 h-32 sm:h-48 object-cover" />
                    <div className="p-3 font-bold text-sm">{name}</div>
                </div>
            </Link>
            {/* <Routes>
                <Route path={`cocktail/${name}`} element={<CocktailDetail />} />
            </Routes> */}
        </div>
    );
};

export default CocktailItem;
