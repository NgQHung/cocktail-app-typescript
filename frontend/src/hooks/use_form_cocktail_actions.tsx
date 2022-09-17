import React, { useState } from "react";
import { useAppSelector } from "../store/hook";

interface TypeCocktailEdit {
    name: string;
    type: string;
    price: number;
    addressImage: string;
}

const Use_Form_Cocktail_Actions = (validateInput?: any) => {
    const [input, setInput] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const inputIsValid = validateInput(input);
    const hasError = !inputIsValid && isTouched;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if(e.currentTarget.value === ''){
        //     setInput({
        //         name: cocktailEdit.name,
        //             type: cocktailEdit.type,
        //             price: cocktailEdit.price,
        //             addressImage: cocktailEdit.addressImage,
        //     })
        // }
        setInput(e.currentTarget.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setIsTouched(false);
    };

    return {
        onChangeHandler,
        input,
        inputBlurHandler,
        reset,
        isTouched,
        hasError,
        inputIsValid,
    };
};

export default Use_Form_Cocktail_Actions;
