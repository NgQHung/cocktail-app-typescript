import React from "react";
import { Cocktail } from "../App";

interface Props {
    children: React.ReactNode;
    clickHandler: () => void;
}

const Button: React.FC<Props> = (props) => {
    return (
        <div
            onClick={props.clickHandler}
            className="flex border-2 m-16 hover:bg-red-300 hover:pointer-event-auto justify-center align-center p-2 text-xl rounded-xl cursor-pointer"
        >
            {props.children}
        </div>
    );
};

export default Button;
