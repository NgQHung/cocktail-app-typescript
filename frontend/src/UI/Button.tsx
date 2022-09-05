import React from "react";

interface Props {
    children: React.ReactNode;
    clickHandler?: (e: any) => void;
    dataValue?: string;
}

export const Button: React.FC<Props> = (props) => {
    return (
        <div
            onClick={props.clickHandler}
            className="flex border-2 hover:bg-red-300 hover:pointer-event-auto justify-center align-center p-2 text-xl rounded-xl cursor-pointer"
            data-value={props.dataValue}
        >
            {props.children}
        </div>
    );
};

export const ButtonHeader: React.FC<Props> = (props) => {
    return (
        <div className="flex justify-center cursor-pointer text-3xl " onClick={props.clickHandler}>
            {props.children}
        </div>
    );
};
