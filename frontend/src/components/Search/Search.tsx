import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";

const Search = () => {
    const dispatch = useDispatch();
    const [valueEntered, setValueEntered] = useState("");
    const searchClicked: any = useSelector<any>((state) => state.cocktailSlice.searchClicked);

    const navigate = useNavigate();
    const searchHandler = () => {
        dispatch(cocktailSliceAction.searchHandler());
        if (searchClicked) return navigate(`/searched/${valueEntered}`);
    };
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValueEntered(e.currentTarget.value);
    };

    const style_search = !searchClicked ? "hidden" : "";
    return (
        <div className="flex">
            <div className="cursor-pointer" onClick={searchHandler}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
                onChange={changeHandler}
                className={`border border-black w-96 rounded-xl ${style_search}`}
            />
        </div>
    );
};

export default Search;
