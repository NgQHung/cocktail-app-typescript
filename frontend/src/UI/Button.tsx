import React from "react";

interface Props {
    children: React.ReactNode;
    clickHandler?: (e: any) => void;
    dataValue?: string;
}

export const Button: React.FC<Props> = (props) => {
    const active = "bg-green-500";
    return (
        <div
            onClick={props.clickHandler}
            className="flex justify-center align-center p-2 text-xl cursor-pointer"
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
