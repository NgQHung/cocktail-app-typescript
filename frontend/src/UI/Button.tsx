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
            className="flex justify-center align-center p-2 text-xl cursor-pointer"
            data-value={props.dataValue}
        >
            {props.children}
        </div>
    );
};
export const ButtonLoadMore: React.FC<Props> = (props) => {
    return (
        <div
            onClick={props.clickHandler}
            className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4"
            data-value={props.dataValue}
        >
            {props.children}
        </div>
    );
};

export const ButtonHeader: React.FC<Props> = (props) => {
    return (
        <div className="flex justify-center cursor-pointer " onClick={props.clickHandler}>
            {props.children}
        </div>
    );
};
